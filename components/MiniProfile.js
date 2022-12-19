function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="h-16 w-16 rounded-full object-cover border p-[2px]"
        src="https://skooncatlitter.com/wp-content/uploads/2021/08/blog-COVER-2000x1200px-1-1.jpg"
        alt="user-avatar"
      />
      <div className="flex-1 ml-4">
        <h2 className="font-bold">just_insta_id</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button className="font-semibold text-blue-400 text-sm">Sign out</button>
    </div>
  );
};

export default MiniProfile;
