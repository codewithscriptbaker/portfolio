import { useEffect } from "react";
import { useRouter } from "next/router";

export default function ProjectsRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/#work");
  }, [router]);

  return null;
}
