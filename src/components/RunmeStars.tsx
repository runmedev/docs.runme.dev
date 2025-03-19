import GitHubButton from "react-github-btn";

const RunmeStars = () => {
  const href = "https://github.com/runmedev/runme"
  const text = "runme"
  return (
    <GitHubButton
      href={href}
      data-text={text}
      title={text}
      data-size="large"
      data-show-count="true"
      aria-label="Star buttons/github-buttons on GitHub"
      data-color-scheme={"light"}
    >
      Stars
    </GitHubButton>
  );
};

export default RunmeStars;
