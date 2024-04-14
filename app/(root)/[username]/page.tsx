import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EyeOpenIcon, Pencil2Icon } from "@radix-ui/react-icons";
import ViewProfile from "@/components/shared/view-profile";
import EditProfile from "@/components/shared/edit-profile";
import { auth } from "@clerk/nextjs/server";
import { notFound } from "next/navigation";
import { getUser } from "@/lib/actions/user.actions";

export default async function Profile({
  params,
}: {
  params: { username: string };
}) {
  const username = params.username.replace("%40", "").toLowerCase(); // Remove %40 (@) and convert to lowercase
  const user = await getUser({ username });
  if (!user) notFound();

  return (
    <main className="min-h-screen w-full">
      <div className="flex flex-col items-center px-6 py-4">
        <Tabs defaultValue="view" className="w-full max-w-prose text-center">
          {
            // Only show tabs if the user is viewing their own profile
            auth().sessionClaims?.username === username && (
              <TabsList className="mb-2">
                <TabsTrigger value="view" className="flex gap-2 items-center">
                  <EyeOpenIcon /> View
                </TabsTrigger>
                <TabsTrigger value="edit" className="flex gap-2 items-center justify-center">
                  <Pencil2Icon /> Edit
                </TabsTrigger>
              </TabsList>
            )
          }
          <TabsContent value="view">
            <ViewProfile user={user} />
          </TabsContent>
          <TabsContent value="edit">
            <EditProfile />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
