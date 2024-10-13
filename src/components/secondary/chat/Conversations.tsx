import React, { useEffect, useState } from "react";
import Contact from "./Contact";
import ProfileBar from "./ProfileBar";
import Input from "@/components/lib/custom/Input";

export type IContact = {
  id: string;
  name: string;
  lastMessage: string;
  timeStamp: string;
  unreadMessages: number;
}

const contacts: IContact[] = [
  {
    id: 'a1b2c3d4e5',
    name: 'John Doe',
    lastMessage: 'Hey there!',
    timeStamp: '10:00pm',
    unreadMessages: 2
  },
  {
    id: 'f6g7h8i9j0',
    name: 'Jane Smith',
    lastMessage: 'See you tomorrow.',
    timeStamp: '12:30pm',
    unreadMessages: 0
  },
  {
    id: 'k1l2m3n4o5',
    name: 'Mike Ross',
    lastMessage: 'Where are you?',
    timeStamp: '8:15am',
    unreadMessages: 5
  },
  {
    id: 'p6q7r8s9t0',
    name: 'Emily Davis',
    lastMessage: 'Meeting at 3?',
    timeStamp: '9:45am',
    unreadMessages: 1
  },
  {
    id: 'u1v2w3x4y5',
    name: 'Chris Evans',
    lastMessage: 'Great job today!',
    timeStamp: '6:20pm',
    unreadMessages: 0
  }
];

export default function Conversations() {
  const [query, setQuery] = useState('');
  const [filteredContacts, setFilteredContacts] = useState<IContact[]>(contacts);

  useEffect(() => {
    handleFilter(); // Re-run filter when 'query' changes
  }, [query]);

  const handleFilter = () => {
    if (query) {
      // Filter contacts based on the query, case-insensitive
      const filtered = contacts.filter(contact =>
        contact.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredContacts(filtered);
    } else {
      // If no query, show all contacts
      setFilteredContacts(contacts);
    }
  };

  return (
    <div className="w-full space-y-5 overflow-hidden overflow-y-scroll pb-10 lg:w-[20rem] bg-[#FAFAFA] p-4 h-full rounded-[12px]">
      <ProfileBar />

      <div>
        <Input
          type="text"
          value={query}
          icon="lucide:search"
          placeholder="Search"
          disabled={contacts.length < 1}
          onChange={({ target }) => setQuery(target.value)}
          className="bg-white outline-none  disabled:cursor-not-allowed py-3 rounded-[16px] placeholder:text-[#B0BABF] text-[#818187] w-full max-w-[30rem] pl-9 pr-4"
        />
      </div>

      <hr className="border-b-2 bg-[#CDCDCD]" />

      <div>
        {contacts.length === 0 ? (
          // Show when there are no contacts at all
          <h3 className="text-[#FF8600] text-center animate-pulse">
            No contacts
          </h3>
        ) : filteredContacts.length > 0 ? (
          // Show filtered contacts if matches are found
            <div className="space-y-2">
            {filteredContacts.map((contact, i) => (
              <Contact
                key={i}
                data={contact}
              />
            ))}
          </div>
        ) : (
          // Show when there are contacts but no matches for the query
          <h3 className="text-[#FF8600] text-center animate-pulse">
            No match
          </h3>
        )}
      </div>

      <hr className="border-b-2 bg-[#CDCDCD]" />
    </div>
  )
}