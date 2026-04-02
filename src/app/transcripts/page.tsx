import { Metadata } from "next";
import { TranscriptsContent } from "./TranscriptsContent";

export const metadata: Metadata = {
  title: "Transcripts | Clarsi Trésor ILOKI",
  description: "Mes relevés de notes académiques - EIGSI et Classes Préparatoires",
};

export default function TranscriptsPage() {
  return <TranscriptsContent />;
}