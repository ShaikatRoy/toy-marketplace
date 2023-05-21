
const ErrorPage = () => {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-gray-900">
  <img src='https://i.ibb.co/1d8KHx3/4660894-2456051.jpg' alt="Page Not Found" className="w-full" />
  <button className="btn btn-warning mt-4 absolute" onClick={() => window.history.back()}>Go Back</button>
</div>

      
    );
};
export default ErrorPage;