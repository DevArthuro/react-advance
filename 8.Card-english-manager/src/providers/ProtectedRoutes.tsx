interface Props {
  children: React.ReactNode;
}

const ProtectedRoutes: React.FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default ProtectedRoutes;
