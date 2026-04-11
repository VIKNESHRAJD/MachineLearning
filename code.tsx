import React, { useState, useRef } from 'react';

const EmjeekoWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [forumComments, setForumComments] = useState([
    { id: 1, name: 'MusicFan23', comment: 'Love the new track! When is the album dropping?', date: '2023-10-15' },
    { id: 2, name: 'HipHopHead', comment: 'Saw you at the SoundCity fest. Amazing performance!', date: '2023-09-22' },
  ]);
  const [newComment, setNewComment] = useState({ name: '', comment: '' });

  // Ref for scrolling to sections
  const sectionRefs = {
    home: useRef(null),
    composed: useRef(null),
    gigs: useRef(null),
    film: useRef(null),
    art: useRef(null),
    archive: useRef(null),
    team: useRef(null),
    production: useRef(null),
    forum: useRef(null),
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    sectionRefs[sectionId].current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.name && newComment.comment) {
      const comment = {
        id: forumComments.length + 1,
        name: newComment.name,
        comment: newComment.comment,
        date: new Date().toISOString().split('T')[0]
      };
      setForumComments([...forumComments, comment]);
      setNewComment({ name: '', comment: '' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black bg-opacity-90 z-50 border-b border-gray-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-serif font-bold">Emjeeko</div>
          <div className="hidden md:flex space-x-8">
            {['Home', 'Composed', 'Gigs', 'Film', 'Art', 'Music Archive', 'Team', 'Production', 'Forum'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', ''))}
                className={`text-sm uppercase tracking-wider hover:text-purple-400 transition-colors ${
                  activeSection === item.toLowerCase().replace(' ', '') ? 'text-purple-400' : 'text-gray-300'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section - Home */}
      <section ref={sectionRefs.home} className="pt-24 pb-16 md:pt-32 md:pb-24 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">EMJEEKO</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">Rapper • Producer • Creative Visionary</p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Listen Now
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://placeholder-image-service.onrender.com/image/500x600?prompt=Hip-hop artist in stylish streetwear with dramatic lighting and urban background&id=84f83831-4ba5-4ab1-9e10-a8266386b637" 
              alt="Emjeeko posing in stylish urban attire with dramatic lighting" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Composed Section - Year-wise Roller */}
      <section ref={sectionRefs.composed} className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">COMPOSED</h2>
          
          <div className="overflow-x-auto pb-8">
            <div className="flex space-x-8 min-w-max">
              {[2023, 2022, 2021, 2020, 2019].map((year) => (
                <div key={year} className="w-72 flex-shrink-0">
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-4 text-purple-400">{year}</h3>
                    <div className="space-y-4">
                      {['Urban Dreams', 'Street Symphony', 'Concrete Poetry', 'Midnight Verses'].map((project) => (
                        <div key={project} className="border-b border-gray-700 pb-3">
                          <h4 className="font-semibold">{project}</h4>
                          <p className="text-sm text-gray-400">Single • March 15</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gigs Section */}
      <section ref={sectionRefs.gigs} className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">GIGS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img 
                src="https://placeholder-image-service.onrender.com/image/400x250?prompt=Live hip-hop performance on stage with dramatic lighting and energetic crowd&id=84f83831-4ba5-4ab1-9e10-a8266386b637" 
                alt="Live performance at SoundCity Festival with energetic crowd" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">SoundCity Festival</h3>
                <p className="text-purple-400 mb-2">June 15, 2023 • Los Angeles</p>
                <p className="text-gray-400">Headlining performance with special guests</p>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img 
                src="https://placeholder-image-service.onrender.com/image/400x250?prompt=Intimate club performance with low lighting and focused atmosphere&id=84f83831-4ba5-4ab1-9e10-a8266386b637" 
                alt="Intimate performance at The Basement club with focused atmosphere" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">The Basement</h3>
                <p className="text-purple-400 mb-2">April 8, 2023 • New York</p>
                <p className="text-gray-400">Intimate acoustic set and Q&A session</p>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img 
                src="https://placeholder-image-service.onrender.com/image/400x250?prompt=Festival stage with large crowd and dynamic lighting effects&id=84f83831-4ba5-4ab1-9e10-a8266386b637" 
                alt="Main stage performance at Urban Beats Festival with large crowd" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Urban Beats Festival</h3>
                <p className="text-purple-400 mb-2">August 22, 2023 • Chicago</p>
                <p className="text-gray-400">Festival main stage with pyrotechnics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Film Section */}
      <section ref={sectionRefs.film} className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">FILM</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black rounded-lg overflow-hidden relative group">
              <img 
                src="https://placeholder-image-service.onrender.com/image/600x400?prompt=Music video still with urban landscape and artistic cinematography&id=84f83831-4ba5-4ab1-9e10-a8266386b637" 
                alt="Still from Concrete Dreams music video featuring urban landscapes" 
                className="w-full h-64 object-cover group-hover:opacity-70 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold">
                  Watch Now
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Concrete Dreams</h3>
                <p className="text-gray-400">Official Music Video • 2023</p>
              </div>
            </div>
            
            <div className="bg-black rounded-lg overflow-hidden relative group">
              <img 
                src="https://placeholder-image-service.onrender.com/image/600x400?prompt=Short film scene with emotional narrative and cinematic lighting&id=84f83831-4ba5-4ab1-9e10-a8266386b637" 
                alt="Still from Midnight Verses short film with emotional narrative" 
                className="w-full h-64 object-cover group-hover:opacity-70 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold">
                  Watch Now
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Midnight Verses</h3>
                <p className="text-gray-400">Short Film • 2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Art Section */}
      <section ref={sectionRefs.art} className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">ART</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img 
                src="https://placeholder-image-service.onrender.com/image/400x400?prompt=Abstract digital art with urban influences and vibrant colors&id=84f83831-4ba5-4ab1-9e10-a8266386b637" 
                alt="Abstract digital artwork with urban themes and vibrant color palette" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">Urban Echoes</h3>
                <p className="text-gray-400 text-sm">Digital Art • 2023</p>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img 
                src="https://placeholder-image-service.onrender.com/image/400x400?prompt=Graphic design piece with typography and street art elements&id=84f83831-4ba5-4ab1-9e10-a8266386b637" 
                alt="Typography-based graphic design with street art influences" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">Type Revolution</h3>
                <p className="text-gray-400 text-sm">Graphic Design • 2023</p>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img 
                src="https://placeholder-image-service.onrender.com/image/400x400?prompt=Mixed media collage with music and urban culture references&id=84f83831-4ba5-4ab1-9e10-a8266386b637" 
                alt="Mixed media collage artwork incorporating music and urban culture themes" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">Sound Collage</h3>
                <p className="text-gray-400 text-sm">Mixed Media • 2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music Archive Section */}
      <section ref={sectionRefs.archive} className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">MUSIC ARCHIVE</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6">DISCOGRAPHY</h3>
              <div className="space-y-6">
                {['Midnight Verses (2023)', 'Urban Dreams (2022)', 'Concrete Poetry (2021)', 'Street Symphony (2020)'].map((album) => (
                  <div key={album} className="flex items-center justify-between border-b border-gray-800 pb-4">
                    <span className="font-medium">{album}</span>
                    <button className="text-purple-400 hover:text-purple-300 text-sm">Listen</button>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-black p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6">SINGLES & FEATURES</h3>
              <div className="space-y-4">
                {['Revolution Beat (feat. Lyricist)', 'City Lights', 'Gravel & Gold', 'Echoes of Tomorrow'].map((single) => (
                  <div key={single} className="flex items-center justify-between">
                    <span className="text-gray-300">{single}</span>
                    <button className="text-purple-400 hover:text-purple-300 text-sm">Play</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={sectionRefs.team} className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">TEAM</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://placeholder-image-service.onrender.com/image/200x200?prompt=Professional music manager in stylish attire&id=84f83831-4ba5-4ab1-9e10-a8266386b637" 
                  alt="Alex Johnson, Music Manager with professional demeanor" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg">Alex Johnson</h3>
              <p className="text-purple-400">Manager</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://placeholder-image-service.onrender.com/image/200x200?prompt=Music producer in studio environment&id=84f83831-4ba5-4ab1-9e10-a8266386b637" 
                  alt="Maria Rodriguez, Producer with creative expression" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg">Maria Rodriguez</h3>
              <p className="text-purple-400">Producer</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://placeholder-image-service.onrender.com/image/200x200?prompt=Creative director with artistic style&id=84f83831-4ba5-4ab1-9e10-a8266386b637" 
                  alt="Jamal Williams, Creative Director with visionary expression" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg">Jamal Williams</h3>
              <p className="text-purple-400">Creative Director</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://placeholder-image-service.onrender.com/image/200x200?prompt=Tour manager with organized professional appearance&id=84f83831-4ba5-4ab1-9e10-a8266386b637" 
                  alt="Sarah Chen, Tour Manager with efficient demeanor" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg">Sarah Chen</h3>
              <p className="text-purple-400">Tour Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Production Section */}
      <section ref={sectionRefs.production} className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">PRODUCTION</h2>
          
          <div className="max-w-4xl mx-auto bg-black p-8 rounded-lg">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold mb-2">UPCOMING ALBUM</h3>
              <p className="text-purple-400 text-xl">"Echoes of the City"</p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-10 text-center">
              <div>
                <div className="text-4xl font-bold">42</div>
                <div className="text-gray-400">Days</div>
              </div>
              <div>
                <div className="text-4xl font-bold">16</div>
                <div className="text-gray-400">Hours</div>
              </div>
              <div>
                <div className="text-4xl font-bold">28</div>
                <div className="text-gray-400">Minutes</div>
              </div>
            </div>
            
            <div className="text-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold mr-4">
                Pre-Save
              </button>
              <button className="border border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-full font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Forum Section */}
      <section ref={sectionRefs.forum} className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">FORUM</h2>
          
          <div className="bg-gray-800 rounded-lg p-6 mb-10">
            <h3 className="text-xl font-bold mb-4">Join the Conversation</h3>
            <form onSubmit={handleCommentSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 bg-gray-700 rounded text-white"
                  value={newComment.name}
                  onChange={(e) => setNewComment({...newComment, name: e.target.value})}
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Your Comment"
                  rows={4}
                  className="w-full p-3 bg-gray-700 rounded text-white"
                  value={newComment.comment}
                  onChange={(e) => setNewComment({...newComment, comment: e.target.value})}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded font-semibold"
              >
                Post Comment
              </button>
            </form>
          </div>
          
          <div className="space-y-6">
            {forumComments.map((comment) => (
              <div key={comment.id} className="bg-gray-800 rounded-lg p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-purple-400">{comment.name}</h4>
                  <span className="text-sm text-gray-400">{comment.date}</span>
                </div>
                <p className="text-gray-300">{comment.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-6 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-serif font-bold mb-6">EMJEEKO</div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
          </div>
          
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Emjeeko. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default EmjeekoWebsite;
