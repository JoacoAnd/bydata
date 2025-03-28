import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Image src="/images/logo.svg" width={100} height={50} alt="Logo" />
        <nav className="hidden md:flex gap-6">
          <Link
            href="#services"
            className="text-sm font-medium text-bydata-primary hover:text-bydata-accent"
          >
            Servicios
          </Link>
          <Link
            href="#process"
            className="text-sm font-medium text-bydata-primary hover:text-bydata-accent"
          >
            Proceso
          </Link>
          <Link
            href="#cases"
            className="text-sm font-medium text-bydata-primary hover:text-bydata-accent"
          >
            Casos
          </Link>
          <Link
            href="#why-us"
            className="text-sm font-medium text-bydata-primary hover:text-bydata-accent"
          >
            ¿Por qué elegirnos?
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-bydata-primary hover:text-bydata-accent"
          >
            Contacto
          </Link>
        </nav>
        <Button
          asChild
          className="bg-bydata-primary hover:bg-bydata-primary/90"
        >
          <Link href="#contact">Contáctanos</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
