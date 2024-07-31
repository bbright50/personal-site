import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function RepoCard(props) {
  return (
    <div className="min-w-[270px] w-1/3 lg:w-1/4 border-4 border-solid border-red-500/50 rounded-xl shrink-0">
      <Card>
        <CardHeader>
          <CardTitle>{props.name}</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{props.desc}</p>
        </CardContent>
        <CardFooter>
          <div className="mx-auto">
            <a href={props.link} target="_blank">
              <Button variant="outline" className="hover:bg-slate-400">
                View Repo
              </Button>
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

// variant="outline"
