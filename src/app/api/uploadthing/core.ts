import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

const checkAuth = async () => {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");
  return { userId };
};

interface uploadStatus {
  metadata: { userId: string };
  file: { url: string };
}

const checkUploadStatus = async ({ metadata, file }: uploadStatus) => {
  // This code RUNS ON YOUR SERVER after upload
  console.log("Upload complete for userId:", metadata.userId);
  console.log("file url", file.url);
  // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
  return { uploadedBy: metadata.userId };
};

export const ourFileRouter = {
  serverImage: f({
    image: { maxFileSize: "4MB", maxFileCount: 1 },
  })
    .middleware(checkAuth)
    .onUploadComplete(checkUploadStatus),
  messageFile: f(["image", "pdf", "text"])
    .middleware(checkAuth)
    .onUploadComplete(checkUploadStatus),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
