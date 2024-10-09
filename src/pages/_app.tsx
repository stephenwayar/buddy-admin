import React, { useRef } from "react";
import "@/styles/globals.css";
import store from "@/redux/store";
import '@fontsource-variable/mulish';
import { Provider } from "react-redux";
import { setUser } from "@/redux/slices/user";
import { Key, User } from "@/redux/types/user.types";
import { decryptData } from "@/helpers/functions/encryption";
import type { AppContext, AppInitialProps, AppProps } from "next/app";
import ErrorBoundary from "@/components/secondary/common/ErrorBoundary";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getCookieItem, parseCookies } from "@/helpers/functions/cookie";

const queryClient = new QueryClient()

interface AppOwnProps { user: User | null }
interface MyAppProps extends AppProps, AppOwnProps { }

const App = ({ Component, pageProps, user }: MyAppProps) => {
  const initialized = useRef(false)

  if (!initialized.current) {
    // Runs once when the app is mounted on the browser
    store.dispatch(setUser(user));
    initialized.current = true;
  }

  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ErrorBoundary>
            <Component {...pageProps} />
          </ErrorBoundary>
        </Provider>
      </QueryClientProvider>
    </React.Fragment>
  );
}

App.getInitialProps = async (appContext: AppContext): Promise<AppOwnProps & AppInitialProps> => {
  const { ctx, Component } = appContext;  // Destructure context and component from appContext

  let pageProps = {};

  // If the component has getInitialProps, call it and merge its result with pageProps
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  let user: User | null = null;

  // Check if the request is from the server side
  if (ctx.req) {
    const cookies = parseCookies(ctx.req);  // Parse cookies from the request
    const cookieUser = cookies[Key.BUDDY_USER];  // Get the specific user cookie

    // If the user cookie exists, decrypt it to get the user data
    if (cookieUser) {
      user = decryptData(cookieUser);
    }
  } else {
    // Request running on client side
    user = getCookieItem(Key.BUDDY_USER)
  }

  // Return the collected pageProps and user data
  return { pageProps, user };
};

export default App;