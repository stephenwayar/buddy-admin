import React, { ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    // Define a state variable to track whether is an error or not
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // You can use your own error logging service here
    console.log({ error, errorInfo });
  }

  render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      return (
        <div className="h-screen flex justify-center items-center px-4 sm:px-6">
          <div className="space-y-4">
            <h1 className="text-[#090A04] text-center text-4xl font-semibold">
              Oops!
            </h1>

            <h3 className="text-[#090A04] text-center text-lg">
              There was a client side error somewhere
            </h3>

            <div className="text-center">
              <button onClick={() => this.setState({ hasError: false })} className="bg-[#FF8600] hover:bg-[#ff8800e1] text-white h-[45px] rounded-lg text-center w-36">
                Try again
              </button>
            </div>
          </div>
        </div>
      );
    }

    // Return children components in case of no error
    return this.props.children;
  }
}

export default ErrorBoundary;