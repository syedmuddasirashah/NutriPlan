import Layout from "@/components/Layout";

export default function Contact() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-muted-foreground">
          Have questions or feedback? Reach us at{" "}
          <a
            href="mailto:support@nutriplan.com"
            className="underline text-blue-500"
          >
            support@nutriplan.com
          </a>.
        </p>
      </div>
    </Layout>
  );
}
