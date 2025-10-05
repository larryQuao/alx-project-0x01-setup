import UserModal from '@/components/common/UserModal';
import Header from '@/components/layout/Header';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-full  ">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">
            Welcome to our Application!
          </h1>
          <p className="mt-4 text-xl text-white">
            We&apos;re glad you&apos;re here. Explore and enjoy your experience.
          </p>
          <button className="mt-5 px-6 py-3 bg-white text-blue-500 rounded-full font-semibold hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>
      </main>
      <div className=''>
        <UserModal id={0} name={''} username={''} email={''} address={{
          street: '',
          suite: '',
          city: '',
          zipcode: '',
          geo: {
            lat: '',
            lng: ''
          }
        }} phone={''} website={''} company={{
          name: '',
          catchPhrase: '',
          bs: ''
        }} />
      </div>
    </div>
  )
};

export default Home;