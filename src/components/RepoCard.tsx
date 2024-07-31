import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface InjectedProps {
  name: string;
  link: string;
  desc: string;
  key: number;
}

const RepoCard: React.FC<InjectedProps> = ({ name, link, desc, key }) => {
  return (
    <div className="min-w-[270px] w-1/3 lg:w-1/4 border-4 border-solid border-red-500/50 rounded-xl shrink-0">
      <Card key={key}>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{desc}</p>
        </CardContent>
        <CardFooter>
          <div className="mx-auto">
            <a href={link} target="_blank">
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

export default RepoCard;

