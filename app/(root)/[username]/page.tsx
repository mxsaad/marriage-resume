import { currentUser } from "@clerk/nextjs"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EyeOpenIcon, Pencil2Icon } from "@radix-ui/react-icons";

export default async function Profile({ params }: { params: { username: string } }) {
  const user = await currentUser();
  return (
    <main className="min-h-screen w-screen">
      <div className="container flex flex-col items-center">
        <Tabs defaultValue="view" className="w-[400px] mt-24 text-center">
          {/* %40 represents the @ symbol in the url */}
          {`%40${user?.username}` === params.username.toLowerCase() && (
            <TabsList>
              <TabsTrigger value="view" className="flex gap-2 items-center">
                <EyeOpenIcon /> View
              </TabsTrigger>
              <TabsTrigger value="edit" className="flex gap-2 items-center">
                <Pencil2Icon /> Edit
              </TabsTrigger>
            </TabsList>
          )}
          <TabsContent value="view">
            <section>
              <h1 className="text-4xl font-bold">Profile</h1>
            </section>
          </TabsContent>
          <TabsContent value="edit">
            <section>
              <h1 className="text-4xl font-bold">Edit Profile</h1>
            </section>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
