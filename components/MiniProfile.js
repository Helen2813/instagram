import { useSession, signOut } from "next-auth/react";

function MiniProfile() {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="h-16 w-16 rounded-full object-cover border p-[2px]"
        src={session?.user.image}
        alt="user-avatar"
      />
      <div className="flex-1 ml-4">
        <h2 className="font-bold">{session?.user?.userName}</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button
        onClick={signOut}
        className="font-semibold text-blue-400 text-sm"
      >
        Sign out
      </button>
    </div>
  );
};

export default MiniProfile;
