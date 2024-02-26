export default function UserProfile({params}:any) {
    return (
        <div className = "flex bg-white min-w-screen min-h-screen justify-center items-center">
             Welcome to profile page of {params.id}
        </div>
    )
} 