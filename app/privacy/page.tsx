import type { Metadata } from "next";
import PrivacyPage from './PrivacyPage';

export const metadata: Metadata = {
  title: "f-bit software | datenschutz",
};

export default function Page() {
  return <PrivacyPage />;
}
