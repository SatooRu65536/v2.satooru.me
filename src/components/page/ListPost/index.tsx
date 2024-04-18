interface Props {
  category: string | undefined;
  number: number;
}

const ListPostPage = (props: Props) => {
  const { category, number } = props;

  return (
    <div>
      ListPage: {category}:{number}
    </div>
  );
};

export default ListPostPage;
