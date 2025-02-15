const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(cors());

const rootDownloadsPath = "C:\\Downloads";  // Path to your root downloads folder

app.get("/download", (req, res) => {
    const videoUrl = req.query.url;
    const format = req.query.format || "mp4"; // Default to mp4 if no format is provided

    if (!videoUrl) {
        return res.status(400).json({ error: "URL is required" });
    }

    // Step 1: Download video title using yt-dlp to get dynamic title
    const getTitleCommand = `yt-dlp --get-title "${videoUrl}"`;

    exec(getTitleCommand, (error, stdout, stderr) => {
        if (error) {
            console.error("Error getting title:", stderr);
            return res.status(500).json({ error: stderr });
        }

        const videoTitle = stdout.trim().replace(/[|#]/g, ''); // Remove unwanted characters
        console.log("Video Title:", videoTitle);

        // Set the output paths based on the root downloads path and video title
        let videoOutput = path.join(rootDownloadsPath, `${videoTitle}_video.mp4`);
        let audioOutput = path.join(rootDownloadsPath, `${videoTitle}_audio.aac`);
        let finalOutput = path.join(rootDownloadsPath, `${videoTitle}_final_output.mp4`);

        // Step 2: Download the video and audio separately using yt-dlp
        let downloadCommand = `yt-dlp -f bestvideo -o "${videoOutput.replace(/\\/g, '\\\\')}" "${videoUrl}" && yt-dlp -f bestaudio -o "${audioOutput.replace(/\\/g, '\\\\')}" "${videoUrl}"`;

        console.log("Executing download command:", downloadCommand);

        exec(downloadCommand, (error, stdout, stderr) => {
            if (error) {
                console.error("Error during download:", stderr);
                return res.status(500).json({ error: stderr });
            }

            console.log("Download success:", stdout);

            // Step 3: Merge the extracted video and audio into one file using ffmpeg
            let mergeCommand = `ffmpeg -i "${videoOutput.replace(/\\/g, '\\\\')}" -i "${audioOutput.replace(/\\/g, '\\\\')}" -c:v copy -c:a aac -strict experimental "${finalOutput.replace(/\\/g, '\\\\')}"`;

            console.log("Executing merge command:", mergeCommand);

            exec(mergeCommand, (error, stdout, stderr) => {
                if (error) {
                    console.error("Error merging files:", stderr);
                    return res.status(500).json({ error: stderr });
                }

                console.log("Merge success:", stdout);

                // Step 4: Delete the temporary video and audio files
                fs.unlink(videoOutput, (err) => {
                    if (err) {
                        console.error("Error deleting video file:", err);
                    }
                });

                fs.unlink(audioOutput, (err) => {
                    if (err) {
                        console.error("Error deleting audio file:", err);
                    }
                });

                // Return success response
                res.json({ message: "Download and merge complete! Temporary files deleted.", details: stdout });
            });
        });
    });
});

app.listen(5000, () => console.log("Server running on port 5000"));
