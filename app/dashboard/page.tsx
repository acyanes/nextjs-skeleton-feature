const peopleData = async () => {
  const res = await fetch(
    'https://random-data-api.com/api/users/random_user?size=10'
  );
  if (!res.ok) {
    throw new Error('Error fetching users');
  }
  const data = res.json();
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 3000);
  });
};

export default async function DashboardPage() {
  const data = (await peopleData()) as any;
  return (
    <div className='bg-black'>
      {data.map((person: any) => (
        <div key={person.id} className='bg-gray-200 p-4'>
          <div className='bg-white rounded-lg shadow-md p-6'>
            <h2 className='text-xl font-bold mb-4'>
              {person.first_name} {person.last_name}
            </h2>
            <div className='mb-2'>
              <span className='font-semibold'>Email: </span>
              <a href={`mailto:${person.email}`}>{person.email}</a>
            </div>
            <div>
              <span className='font-semibold'>Phone: </span>
              <a href={`tel:${person.phone_number}`}>{person.phone_number}</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
