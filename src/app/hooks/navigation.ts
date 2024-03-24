export const navigation = (router: any) => {
  const navigate = (path: string) => {
    router.push(path);
  };

  return {
    navigate,
  };
};
