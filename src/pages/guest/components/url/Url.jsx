import useGuestUrl from "@/hooks/guest/useGuestUrl";

const Url = () => {
  const { url } = useGuestUrl();
  console.log(url);
  return (
    <>
      <h2>{url ? "Here is your shortened URL" : "Shorten your URL"}</h2>
      {url && (
        <div>
          <a
            href={url.shortUrl}
            target="_blank"
            rel="noreferrer"
            title="Shortened URL"
          >
            {url.shortUrl}
          </a>

          <p>
            <strong>Original URL:</strong> {url.originalUrl}
          </p>
          <p>
            <strong>Short URL:</strong> {url.shortUrl}
          </p>
        </div>
      )}
    </>
  );
};

export default Url;
