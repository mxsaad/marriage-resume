import { Section, Container } from "@/components/craft";
import { Balancer } from "react-wrap-balancer";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { getUsers } from "@/lib/actions/user.actions";

export default async function Stats() {
  const users = await getUsers();
  const stats = [
    {
      title: "Total Users",
      value: users ? users.length : 0,
    },
    {
      title: "Total Sisters",
      value: users
        ? users.filter((user) => user.gender === "Sister").length
        : 0,
    },
    {
      title: "US & Canada",
      value: users
        ? users.filter(
            (user) =>
              user.location.country === "United States" ||
              user.location.country === "Canada",
          ).length
        : 0,
    },
    {
      title: "Aged 18-25",
      value: users
        ? users.filter((user) => {
            const age =
              new Date().getFullYear() - new Date(user.dob).getFullYear();
            return age >= 18 && age <= 25;
          }).length
        : 0,
    },
  ];

  return (
    <Section>
      <Container>
        <div className="flex gap-4 lg:gap-12 flex-col lg:flex-row items-center justify-center">
          <div className="flex gap-4 flex-col items-center">
            <h3 className="text-center scroll-m-20 text-4xl sm:text-5xl lg:text-6xl/none font-bold tracking-tight">
              <Balancer>Clear Numbers</Balancer>
            </h3>
            <h4 className="text-lg lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-center">
              <Balancer>
                You should know what you're getting into. Here are some stats
                about the users on our platform.
              </Balancer>
            </h4>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-4 text-left w-full">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="min-w-fit shadow-lg shadow-secondary"
                >
                  <CardHeader className="font-normal text-sm">
                    <CardDescription>{stat.title}</CardDescription>
                    <CardTitle className="font-bold text-3xl">
                      {stat.value}
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
