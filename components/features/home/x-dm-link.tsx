import Balancer from "react-wrap-balancer";

export function XMessageDM() {
  return (
    <div className="py-5">
      <h2 className="text-md">
        <a
          href="https://twitter.com/messages/compose?recipient_id=2832155198"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="flex items-center">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-4 w-4 mr-1 fill-current"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
            <Balancer>DM's open!</Balancer>
          </span>
        </a>
      </h2>
    </div>
  );
}
