import { Badge, Home, Package2, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
function Sidebar() {
  return (
    <section className="flex h-screen max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Package2 className="h-6 w-6" />
          <span className="">Thought Share</span>
        </Link>
      </div>
      <header className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            <Home className="h-4 w-4" />
            Home
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            <ShoppingCart className="h-4 w-4" />
            Messages
            <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
              6
            </Badge>
          </Link>
        </nav>
      </header>
      <div className="mt-auto p-4">
        <Button className="w-full">Create Post</Button>
      </div>
    </section>
  );
}

export default Sidebar;
