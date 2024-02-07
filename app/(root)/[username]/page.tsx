import { currentUser } from "@clerk/nextjs"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EyeOpenIcon, Pencil2Icon } from "@radix-ui/react-icons";
import ViewProfile from "@/components/shared/view-profile";
import EditProfile from "@/components/shared/edit-profile";

export default async function Profile({ params }: { params: { username: string } }) {
  const user = await currentUser();
  return (
    <main className="min-h-screen w-screen px-6 py-12">
      <div className="flex flex-col items-center">
        <Tabs defaultValue="view" className="w-full max-w-prose text-center">
          {`%40${user?.username}` === params.username.toLowerCase() && ( // %40 = @ symbol in URL
            <TabsList className="mt-6 mb-4">
              <TabsTrigger value="view" className="flex gap-2 items-center">
                <EyeOpenIcon /> View
              </TabsTrigger>
              <TabsTrigger value="edit" className="flex gap-2 items-center">
                <Pencil2Icon /> Edit
              </TabsTrigger>
            </TabsList>
          )}
          <TabsContent value="view">
            <ViewProfile />
          </TabsContent>
          <TabsContent value="edit">
            <EditProfile />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
