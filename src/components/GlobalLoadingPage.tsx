const GlobalLoadingPage = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-[3px]">
      <img
        src="/logo-animated.svg"
        alt="Loading..."
        className="w-72 h-auto"
      />
    </div>
  )
}

export default GlobalLoadingPage;
