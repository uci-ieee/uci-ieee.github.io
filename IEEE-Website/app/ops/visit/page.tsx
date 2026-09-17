import ExternalRedirect from "../../../components/ExternalRedirect";

export default function OPSVisitPage() {
  return (
    <ExternalRedirect
      title="Open Project Space"
      description="You're being taken to the full OPS website. Press back or choose Back to home to return to the IEEE homepage."
      destination="/ops-program/"
    />
  );
}