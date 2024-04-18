interface Props {
  category: string | undefined;
  number: number;
}

const PostPage = (props: Props) => {
  const { category, number } = props;

  return (
    <div>
      PostPage: {category}/{number}
    </div>
  );
};

export default PostPage;
