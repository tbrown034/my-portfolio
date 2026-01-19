import { currentUser } from "@clerk/nextjs/server";

export default async function AdminPage() {
  const user = await currentUser();

  return (
    <main className="min-h-screen bg-white dark:bg-blue-950 px-6 py-12 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-950 dark:text-white mb-6">
          Admin Dashboard
        </h1>
        <div className="bg-slate-100 dark:bg-neutral-800 rounded-lg p-6">
          <p className="text-blue-950 dark:text-neutral-200">
            Welcome,{" "}
            {user?.firstName || user?.emailAddresses?.[0]?.emailAddress}
          </p>
        </div>
      </div>
    </main>
  );
}
