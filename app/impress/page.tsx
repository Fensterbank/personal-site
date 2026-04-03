import type { Metadata } from "next";
import ImpressPage from './ImpressPage';

export const metadata: Metadata = {
  title: "f-bit software | impressum",
};

export default function Page() {
  return <ImpressPage />;
}
