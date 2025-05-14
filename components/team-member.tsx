interface TeamMemberProps {
  name: string
  role: string
  image: string
}

export default function TeamMember({ name, role, image }: TeamMemberProps) {
  return (
    <div className="text-center">
      <div className="mb-4 relative mx-auto w-48 h-48 overflow-hidden rounded-full">
        <img
          src={image || "https://placehold.co/300x300/gray/white"}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  )
}
