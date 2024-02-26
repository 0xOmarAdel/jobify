import { ClerkProvider } from "@clerk/nextjs";
import ThemeProvider from "./ThemeProvider";

const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <ClerkProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </ClerkProvider>
    </>
  );
};

export default Providers;
