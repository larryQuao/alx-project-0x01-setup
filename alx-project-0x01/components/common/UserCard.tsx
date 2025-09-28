import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ id, name, username, email, address, phone, website, company }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{id}</h2>
        <h2 className="text-2xl font-semibold text-gray-800">{name} {username}</h2>
        <p className="text-gray-600">{email}</p>
        <p className="text-gray-600">{address.street}, {address.city}, {address.zipcode}</p>
        <p className="text-gray-600">{phone}</p>
        <p className="text-gray-600">{website}</p>
        <p className="text-gray-600">{company.name}</p>
      </div>
    </div>
  );
};

export default UserCard;