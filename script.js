const events = [
	{ id: 'midnight-frequency', title: 'Midnight Frequency', category: 'music', categoryLabel: 'LIVE MUSIC', date: 'FRI, JUN 14', time: '9:00 PM', venue: 'Elsewhere', neighborhood: 'Brooklyn', price: 38, image: 'photo-1470229722913-7c0e2dbbafd3', alt: 'Crowd dancing under concert lights', tag: 'SELLING FAST', dateGroup: 'weekend', description: 'A night of deep cuts, heavy bass, and the kind of dancing you feel the next day. Three rooms, one very good reason to stay out.' },
	{ id: 'soft-focus', title: 'Soft Focus: After Hours', category: 'art', categoryLabel: 'ART & CULTURE', date: 'SAT, JUN 15', time: '7:30 PM', venue: 'The Greenpoint Gallery', neighborhood: 'Brooklyn', price: 24, image: 'photo-1577083552431-6e5fd01aa342', alt: 'Colorful contemporary art installation', tag: 'JUST ADDED', dateGroup: 'weekend', description: 'A late-night look at what happens when the lights come down. New work from five emerging New York artists, a sound installation, and a little room to wander.' },
	{ id: 'long-table', title: 'The Long Table', category: 'food', categoryLabel: 'FOOD & DRINK', date: 'SUN, JUN 16', time: '6:00 PM', venue: 'Radio Star', neighborhood: 'Greenpoint', price: 42, image: 'photo-1414235077428-338989a2e8c0', alt: 'A candlelit table set for dinner', tag: 'GOOD SEATS LEFT', dateGroup: 'weekend', description: 'A generous, family-style dinner built around the best things in season. Five courses, natural wine, and strangers who probably won’t stay strangers.' },
	{ id: 'rooftop-radio', title: 'Rooftop Radio Club', category: 'nightlife', categoryLabel: 'NIGHTLIFE', date: 'THU, JUN 20', time: '8:00 PM', venue: 'The William Vale', neighborhood: 'Brooklyn', price: 30, image: 'photo-1514525253161-7a46d19cd819', alt: 'Friends together at a night party', tag: 'ROOFTOP SEASON', dateGroup: 'week', description: 'A rooftop, a proper sunset, and an open-air set that goes until the city lights take over. Come early; the view is part of it.' },
	{ id: 'vinyl-sunday', title: 'A Very Vinyl Sunday', category: 'music', categoryLabel: 'LIVE MUSIC', date: 'SUN, JUN 23', time: '2:00 PM', venue: 'Baby’s All Right', neighborhood: 'Brooklyn', price: 18, image: 'photo-1516280440614-37939bbacd81', alt: 'Live musician performing on stage', tag: 'A LITTLE DIFFERENT', dateGroup: 'any', description: 'Local selectors take turns playing records they love, from first track to last. Good sound, cold drinks, no algorithm in sight.' },
	{ id: 'greenhouse-club', title: 'Greenhouse Supper Club', category: 'food', categoryLabel: 'FOOD & DRINK', date: 'WED, JUN 26', time: '7:00 PM', venue: 'Fandi Mata', neighborhood: 'Williamsburg', price: 48, image: 'photo-1512621776951-a57141f2eefd', alt: 'Beautifully plated fresh seasonal food', tag: 'FEW TABLES LEFT', dateGroup: 'any', description: 'A seasonal dinner tucked into a room full of plants. Come hungry for bright, produce-first cooking and stay for one more glass.' },
	{ id: 'film-on-roof', title: 'Cinema Above the City', category: 'art', categoryLabel: 'ART & CULTURE', date: 'FRI, JUN 28', time: '8:30 PM', venue: 'Rooftop Films', neighborhood: 'Brooklyn', price: 16, image: 'photo-1489599849927-2ee91cede3ba', alt: 'An atmospheric film screening room', tag: 'OPEN AIR CINEMA', dateGroup: 'any', description: 'An independent film under an open sky. Doors at golden hour, screening after dark. Bring a layer and someone who loves the credits.' },
	{ id: 'soul-train', title: 'Soul Train: The Dance Floor', category: 'nightlife', categoryLabel: 'NIGHTLIFE', date: 'SAT, JUN 29', time: '10:00 PM', venue: 'Elsewhere', neighborhood: 'Brooklyn', price: 32, image: 'photo-1492684223066-81342ee5ff30', alt: 'Festival crowd enjoying a live event', tag: 'DANCE FLOOR ONLY', dateGroup: 'any', description: 'Disco, funk, and the songs you forgot you knew every word to. One dance floor, all night, absolutely no standing around.' },
	{ id: 'bts-lima-oct-07', title: 'BTS WORLD TOUR ARIRANG · Lima', category: 'music', categoryLabel: 'BTS WORLD TOUR', date: 'WED, OCT 7', dateEs: 'MIÉ, 7 OCT', time: '8:00 PM', timeEs: '8:00 p. m.', venue: 'Estadio San Marcos', neighborhood: 'Lima, Peru', price: null, image: 'https://cdn.getcrowder.com/images/a0941d9c-4547-44c2-8ec2-abd0a3eec357-banner-desk-4.png', alt: 'BTS World Tour ARIRANG official Lima event artwork', tag: 'SOLD OUT', tagEs: 'AGOTADO', dateGroup: 'any', official: true, officialUrl: 'https://www.ticketmaster.pe/event/bts-world-tour-arirang', description: 'BTS World Tour ARIRANG in Lima. Wednesday, October 7, 2026 at 8:00 PM at Estadio San Marcos. Ticketmaster lists this show as sold out.' },
	{ id: 'bts-lima-oct-09', title: 'BTS WORLD TOUR ARIRANG · Lima', category: 'music', categoryLabel: 'BTS WORLD TOUR', date: 'FRI, OCT 9', dateEs: 'VIE, 9 OCT', time: '8:00 PM', timeEs: '8:00 p. m.', venue: 'Estadio San Marcos', neighborhood: 'Lima, Peru', price: null, image: 'https://cdn.getcrowder.com/images/a0941d9c-4547-44c2-8ec2-abd0a3eec357-banner-desk-4.png', alt: 'BTS World Tour ARIRANG official Lima event artwork', tag: 'SOLD OUT', tagEs: 'AGOTADO', dateGroup: 'any', official: true, officialUrl: 'https://www.ticketmaster.pe/event/bts-world-tour-arirang', description: 'BTS World Tour ARIRANG in Lima. Friday, October 9, 2026 at 8:00 PM at Estadio San Marcos. Ticketmaster lists this show as sold out.' },
	{ id: 'bts-lima-oct-10', title: 'BTS WORLD TOUR ARIRANG · Lima', category: 'music', categoryLabel: 'BTS WORLD TOUR', date: 'SAT, OCT 10', dateEs: 'SÁB, 10 OCT', time: '8:00 PM', timeEs: '8:00 p. m.', venue: 'Estadio San Marcos', neighborhood: 'Lima, Peru', price: null, image: 'https://cdn.getcrowder.com/images/a0941d9c-4547-44c2-8ec2-abd0a3eec357-banner-desk-4.png', alt: 'BTS World Tour ARIRANG official Lima event artwork', tag: 'SOLD OUT', tagEs: 'AGOTADO', dateGroup: 'any', official: true, officialUrl: 'https://www.ticketmaster.pe/event/bts-world-tour-arirang', description: 'BTS World Tour ARIRANG in Lima. Saturday, October 10, 2026 at 8:00 PM at Estadio San Marcos. Ticketmaster lists this show as sold out.' },
	{ id: 'bts-bogota-oct-02', title: 'BTS WORLD TOUR ARIRANG · Bogotá', category: 'music', categoryLabel: 'BTS WORLD TOUR', date: 'FRI, OCT 2', dateEs: 'VIE, 2 OCT', time: '8:00 PM', timeEs: '8:00 p. m.', venue: 'Estadio El Campín', neighborhood: 'Bogotá, Colombia', price: null, image: 'https://cdn.getcrowder.com/images/17b24ce7-9845-425e-930b-6062980b18dc-whatsapp-image-2026-03-26-at-12.38.00.jpeg', alt: 'BTS World Tour ARIRANG official Bogotá event artwork', tag: 'SOLD OUT', tagEs: 'AGOTADO', dateGroup: 'any', official: true, officialUrl: 'https://www.ticketmaster.co/event/bts-world-tour-2026', description: 'BTS World Tour ARIRANG in Bogotá. Friday, October 2, 2026 at 8:00 PM at Estadio El Campín. Ticketmaster lists this show as sold out.' },
	{ id: 'bts-bogota-oct-03', title: 'BTS WORLD TOUR ARIRANG · Bogotá', category: 'music', categoryLabel: 'BTS WORLD TOUR', date: 'SAT, OCT 3', dateEs: 'SÁB, 3 OCT', time: '8:00 PM', timeEs: '8:00 p. m.', venue: 'Estadio El Campín', neighborhood: 'Bogotá, Colombia', price: null, image: 'https://cdn.getcrowder.com/images/17b24ce7-9845-425e-930b-6062980b18dc-whatsapp-image-2026-03-26-at-12.38.00.jpeg', alt: 'BTS World Tour ARIRANG official Bogotá event artwork', tag: 'SOLD OUT', tagEs: 'AGOTADO', dateGroup: 'any', official: true, officialUrl: 'https://www.ticketmaster.co/event/bts-world-tour-2026', description: 'BTS World Tour ARIRANG in Bogotá. Saturday, October 3, 2026 at 8:00 PM at Estadio El Campín. Ticketmaster lists this show as sold out.' },
	{ id: 'bts-brazil-oct-28', title: 'BTS WORLD TOUR ARIRANG · São Paulo', category: 'music', categoryLabel: 'BTS WORLD TOUR', date: 'WED, OCT 28', dateEs: 'MIÉ, 28 OCT', time: '8:00 PM', timeEs: '8:00 p. m.', venue: 'Estádio do MorumBIS', neighborhood: 'São Paulo, Brazil', price: null, image: 'https://cdn.getcrowder.com/images/18a9ab79-de8a-4470-b7d3-76a812335a79-bts1920x720landing.gif', alt: 'BTS World Tour ARIRANG Brazil official cover photo', tag: 'SOLD OUT', tagEs: 'AGOTADO', dateGroup: 'any', official: true, officialUrl: 'https://www.ticketmaster.com.br/event/venda-geral-bts-world-tour-arirang-28-10', doors: '4:00 PM', doorsEs: '4:00 p. m.', description: 'BTS World Tour ARIRANG in São Paulo. Wednesday, October 28, 2026 at 8:00 PM at Estádio do MorumBIS. Ticketmaster lists this show as sold out.' },
	{ id: 'bts-brazil-oct-30', title: 'BTS WORLD TOUR ARIRANG · São Paulo', category: 'music', categoryLabel: 'BTS WORLD TOUR', date: 'FRI, OCT 30', dateEs: 'VIE, 30 OCT', time: '8:00 PM', timeEs: '8:00 p. m.', venue: 'Estádio do MorumBIS', neighborhood: 'São Paulo, Brazil', price: null, image: 'https://cdn.getcrowder.com/images/18a9ab79-de8a-4470-b7d3-76a812335a79-bts1920x720landing.gif', alt: 'BTS World Tour ARIRANG Brazil official cover photo', tag: 'SOLD OUT', tagEs: 'AGOTADO', dateGroup: 'any', official: true, officialUrl: 'https://www.ticketmaster.com.br/event/venda-geral-bts-world-tour-arirang-30-10', doors: '4:00 PM', doorsEs: '4:00 p. m.', description: 'BTS World Tour ARIRANG in São Paulo. Friday, October 30, 2026 at 8:00 PM at Estádio do MorumBIS. Ticketmaster lists this show as sold out.' },
	{ id: 'bts-brazil-oct-31', title: 'BTS WORLD TOUR ARIRANG · São Paulo', category: 'music', categoryLabel: 'BTS WORLD TOUR', date: 'SAT, OCT 31', dateEs: 'SÁB, 31 OCT', time: '8:00 PM', timeEs: '8:00 p. m.', venue: 'Estádio do MorumBIS', neighborhood: 'São Paulo, Brazil', price: null, image: 'https://cdn.getcrowder.com/images/18a9ab79-de8a-4470-b7d3-76a812335a79-bts1920x720landing.gif', alt: 'BTS World Tour ARIRANG Brazil official cover photo', tag: 'SOLD OUT', tagEs: 'AGOTADO', dateGroup: 'any', official: true, officialUrl: 'https://www.ticketmaster.com.br/event/venda-geral-bts-world-tour-arirang-31-10', doors: '4:00 PM', doorsEs: '4:00 p. m.', description: 'BTS World Tour ARIRANG in São Paulo. Saturday, October 31, 2026 at 8:00 PM at Estádio do MorumBIS. Ticketmaster lists this show as sold out.' },
	{ id: 'bts-buenos-aires', title: 'BTS WORLD TOUR ARIRANG · La Plata', category: 'music', categoryLabel: 'BTS WORLD TOUR', date: 'SAT, OCT 24', dateEs: 'SÁB, 24 OCT', time: '8:00 PM', timeEs: '8:00 p. m.', venue: 'La Plata', neighborhood: 'Argentina', price: null, image: 'https://cdn.getcrowder.com/images/a0941d9c-4547-44c2-8ec2-abd0a3eec357-banner-desk-4.png', alt: 'BTS World Tour ARIRANG event artwork', tag: 'TICKET DETAILS', tagEs: 'DATOS DE ENTRADA', dateGroup: 'any', description: 'Ticket details provided: Saturday, October 24, 2026 at 8:00 PM in La Plata, Argentina.' }
];

const suppliedSampleDetails = {
	'bts-lima-oct-07': { date: 'WED, OCT 7, 2026', dateEs: 'MIÉ, 7 OCT 2026', time: '8:00 PM', timeEs: '8:00 p. m.', section: 'Tribuna Norte', sectionEs: 'Tribuna Norte', row: 'Not assigned', rowEs: 'Sin asignar', seat: 'Consecutive seats', seatEs: 'Asientos consecutivos', mapZone: 'north' },
	'bts-lima-oct-09': { section: 'Tribuna Occidente', sectionEs: 'Tribuna Occidente', row: '22', seat: 'Consecutive seats', seatEs: 'Asientos consecutivos' },
	'bts-lima-oct-10': { section: 'Tribuna Occidente', sectionEs: 'Tribuna Occidente', row: '22', seat: 'Consecutive seats', seatEs: 'Asientos consecutivos' },
	'bts-bogota-oct-03': { date: 'SAT, OCT 3, 2026', dateEs: 'SÁB, 3 OCT 2026', time: '8:00 PM', timeEs: '8:00 p. m.', section: 'Oriental Baja', sectionEs: 'Oriental Baja', row: 'G', seat: '50', mapZone: 'east-lower' },
	'bts-buenos-aires': { date: 'SAT, OCT 24, 2026', dateEs: 'SÁB, 24 OCT 2026', time: '8:00 PM', timeEs: '8:00 p. m.', section: 'Cabecera Norte', sectionEs: 'Cabecera Norte', row: 'Not assigned', rowEs: 'Sin asignar', seat: 'Consecutive seats', seatEs: 'Asientos consecutivos', mapZone: 'north' },
	'bts-brazil-oct-31': { date: 'SAT, OCT 31, 2026', dateEs: 'SÁB, 31 OCT 2026', time: '8:00 PM', timeEs: '8:00 p. m.', section: 'Cadeira Inferior', row: 'Not assigned', rowEs: 'Sin asignar', seat: 'Not assigned', seatEs: 'Sin asignar', ticketType: 'Ingresso inteiro', mapZone: 'lower-bowl' }
};

for (const event of events.filter(item => item.official)) {
	if (event.id.startsWith('bts-lima-')) {
		event.doors = 'Not published';
		event.doorsEs = 'No publicado';
		event.publicZones = 'Campo Access A / B / C (standing); numbered Occidente, Oriente, Norte, and Sur stands.';
		event.publicZonesEs = 'Campo Acceso A / B / C (de pie); tribunas numeradas Occidente, Oriente, Norte y Sur.';
		event.publicPrice = 'Sold out; current prices are not available from the official listing.';
		event.publicPriceEs = 'Agotado; los precios actuales no están disponibles en la publicación oficial.';
	} else if (event.id.startsWith('bts-brazil-')) {
		event.publicZones = 'Pista, Arquibancada, Cadeira Superior, Cadeira Inferior, and Soundcheck VIP (Pista).';
		event.publicZonesEs = 'Pista, Arquibancada, Cadeira Superior, Cadeira Inferior y Soundcheck VIP (Pista).';
		event.publicPrice = 'Sold out. Published Soundcheck VIP package: R$ 4,303 full price or R$ 3,678 half-price, plus a 20% online service fee.';
		event.publicPriceEs = 'Agotado. Paquete Soundcheck VIP publicado: R$ 4.303 precio completo o R$ 3.678 media entrada, más una tarifa de servicio en línea del 20%.';
	} else {
		event.doors = '4:00 PM';
		event.doorsEs = '4:00 p. m.';
		event.publicZones = 'VIP (Gramilla), Occidental, Oriental, Norte, and Sur sections; some sections include upper/lower tiers.';
		event.publicZonesEs = 'Sectores VIP (Gramilla), Occidental, Oriental, Norte y Sur; algunos tienen localidades alta y baja.';
		event.publicPrice = 'COP 300,000–1,081,000, plus COP 8,000 digital ticket issue fee.';
		event.publicPriceEs = 'COP 300.000–1.081.000, más COP 8.000 por emisión digital.';
	}
}

const translations = {
	en: {
		mainNav: 'Main navigation', navDiscover: 'Discover', navTickets: 'My tickets', location: 'EVENTS NEAR YOU', introEyebrow: 'OUT THERE, HAPPENING SOON', introTitle: 'Make a night<br>of <span>something.</span>', introNote: 'The good stuff is closer<br>than you think <span>↘</span>', featuredLabel: 'ON TOUR', featuredCta: 'View show', sectionEyebrow: 'YOUR CITY, YOUR CALL', sectionTitle: 'Find your <em>thing.</em>', filters: 'Filters', searchPlaceholder: 'Artists, venues, or a feeling...', categoryFilter: 'Filter by category', categoryAll: 'Everything <span>↗</span>', categoryMusic: 'Music', categoryArt: 'Art & culture', categoryFood: 'Food & drink', categoryNightlife: 'Nightlife', datePrompt: 'When are you free?', dateAny: 'Any date', dateWeekend: 'This weekend', dateWeek: 'This week', underPrice: 'Under $50', noEvents: 'No events found. Try another search or category.', lineup: "THAT'S THE LINEUP", walletEyebrow: 'YOUR PLANS, SORTED', walletTitle: 'The <span>good stuff.</span>', upcoming: 'Upcoming', past: 'Past', walletEmptyTitle: 'No plans yet.', walletEmptyText: 'That can be fixed. There’s a whole city out there.', exploreEvents: 'Explore events', footerGoodPlans: 'GOOD PLANS. ZERO FOMO.', footerGettingOut: 'MADE FOR GETTING OUT', mobileExplore: 'Explore', soldOut: 'Sold out', unconfirmed: 'DATE NOT ANNOUNCED', officialEvent: 'OFFICIAL EVENT LISTING', eventDate: 'DATE & TIME', eventVenue: 'VENUE', officialInfo: 'Official event information', noTickets: 'Ticket sales are sold out on the official listing. This demo does not sell real tickets.', fanListing: 'UNCONFIRMED FAN LISTING · NO TICKETS FOR SALE', notify: 'Notify me when details are announced', onNotify: 'You’re on the list', tickets: 'TICKETS', ticket: 'TICKET', ticketHolder: 'Ticket holder', ticketType: 'Ticket type', sectionSeat: 'Section / seat', orderRef: 'Order reference', transferStatus: 'Transfer status', ticketDetails: 'Ticket details', transfer: 'Transfer ticket', transferSent: 'TRANSFER SENT', scanDoor: 'SCAN AT THE DOOR', recipientEmail: 'Recipient email', sendTransfer: 'Send transfer', cancel: 'Cancel', generalAdmission: 'GENERAL ADMISSION', person: '/ person', checkoutNote: 'Secure your spot. Your ticket is delivered instantly.', successEyebrow: "IT'S OFFICIAL", successTitle: "You're <em>going.</em>", successMessage: 'Your ticket is waiting in My tickets.', seeTicket: 'See my ticket', closeDetails: 'Close event details', closeConfirm: 'Close confirmation', liveMusic: 'LIVE MUSIC', artCulture: 'ART & CULTURE', foodDrink: 'FOOD & DRINK', nightlifeLabel: 'NIGHTLIFE', justAdded: 'JUST ADDED', sellingFast: 'SELLING FAST', goodSeats: 'GOOD SEATS LEFT', rooftopSeason: 'ROOFTOP SEASON', littleDifferent: 'A LITTLE DIFFERENT', fewTables: 'FEW TABLES LEFT', openAir: 'OPEN AIR CINEMA', danceFloor: 'DANCE FLOOR ONLY'
	},
	es: {
		mainNav: 'Navegación principal', navDiscover: 'Descubrir', navTickets: 'Mis entradas', location: 'EVENTOS CERCA DE TI', introEyebrow: 'PLANES QUE VIENEN PRONTO', introTitle: 'Haz que la noche<br>sea <span>inolvidable.</span>', introNote: 'Lo mejor está más cerca<br>de lo que crees <span>↘</span>', featuredLabel: 'DE GIRA', featuredCta: 'Ver evento', sectionEyebrow: 'TU CIUDAD, TÚ ELIGES', sectionTitle: 'Encuentra tu <em>plan.</em>', filters: 'Filtros', searchPlaceholder: 'Artistas, lugares o planes...', categoryFilter: 'Filtrar por categoría', categoryAll: 'Todo <span>↗</span>', categoryMusic: 'Música', categoryArt: 'Arte y cultura', categoryFood: 'Comida y bebida', categoryNightlife: 'Vida nocturna', datePrompt: '¿Cuándo tienes tiempo?', dateAny: 'Cualquier fecha', dateWeekend: 'Este fin de semana', dateWeek: 'Esta semana', underPrice: 'Menos de $50', noEvents: 'No encontramos eventos. Prueba otra búsqueda o categoría.', lineup: 'ESTOS SON LOS EVENTOS', walletEyebrow: 'TUS PLANES, EN ORDEN', walletTitle: 'Los <span>mejores planes.</span>', upcoming: 'Próximos', past: 'Anteriores', walletEmptyTitle: 'Aún no tienes planes.', walletEmptyText: 'Hay toda una ciudad esperándote.', exploreEvents: 'Explorar eventos', footerGoodPlans: 'BUENOS PLANES. CERO FOMO.', footerGettingOut: 'HECHO PARA SALIR', mobileExplore: 'Explorar', soldOut: 'Agotado', unconfirmed: 'FECHA NO ANUNCIADA', officialEvent: 'EVENTO OFICIAL', eventDate: 'FECHA Y HORA', eventVenue: 'LUGAR', officialInfo: 'Información oficial del evento', noTickets: 'Las entradas están agotadas en el sitio oficial. Esta demo no vende entradas reales.', fanListing: 'EVENTO NO CONFIRMADO · SIN VENTA DE ENTRADAS', notify: 'Avísame cuando anuncien los detalles', onNotify: 'Te avisaremos', tickets: 'ENTRADAS', ticket: 'ENTRADA', ticketHolder: 'Titular de la entrada', ticketType: 'Tipo de entrada', sectionSeat: 'Sector / asiento', orderRef: 'N.º de orden', transferStatus: 'Estado de transferencia', ticketDetails: 'Detalles de la entrada', transfer: 'Transferir entrada', transferSent: 'TRANSFERIDA', scanDoor: 'ESCANEA EN LA ENTRADA', recipientEmail: 'Correo de quien recibe', sendTransfer: 'Enviar entrada', cancel: 'Cancelar', generalAdmission: 'ENTRADA GENERAL', person: '/ persona', checkoutNote: 'Confirma tu lugar. Tu entrada llega al instante.', successEyebrow: '¡YA ES OFICIAL!', successTitle: 'Vas a <em>ir.</em>', successMessage: 'Tu entrada está en Mis entradas.', seeTicket: 'Ver mi entrada', closeDetails: 'Cerrar detalles del evento', closeConfirm: 'Cerrar confirmación', liveMusic: 'MÚSICA EN VIVO', artCulture: 'ARTE Y CULTURA', foodDrink: 'COMIDA Y BEBIDA', nightlifeLabel: 'VIDA NOCTURNA', justAdded: 'RECIÉN AGREGADO', sellingFast: 'ALTA DEMANDA', goodSeats: 'BUENOS LUGARES', rooftopSeason: 'TEMPORADA DE AZOTEA', littleDifferent: 'ALGO DIFERENTE', fewTables: 'POCAS MESAS', openAir: 'CINE AL AIRE LIBRE', danceFloor: 'SOLO PISTA DE BAILE'
	}
};

Object.assign(translations.en, {
	featuredTitle: 'ARIRANG<br>in Lima', featuredVenue: 'Estadio San Marcos · Lima, Peru', featuredMonth: 'OCTOBER 2026', showCount: '3 SHOWS',
	walletCount: count => `${count} ${count === 1 ? 'TICKET' : 'TICKETS'}`,
	ticketActions: 'Ticket actions', deleteTicket: 'Delete ticket', confirmDeleteTicket: 'Delete this ticket from My tickets?',
	checkoutFree: 'SAMPLE TOTAL · $0', createDemo: 'Add sample ticket',
	demoWarning: 'SAMPLE', priceTba: 'PRICE TBA', sampleTotal: 'Sample total',
	entryCodeNotIssued: 'ENTRY CODE NOT ISSUED', transferReviewTitle: 'Review transfer', transferSent: 'SAMPLE TRANSFER RECORDED',
	sectionLabel: 'SECTION', rowLabel: 'ROW', seatLabel: 'SEAT', doorsOpen: 'DOORS OPEN', venueZones: 'AVAILABLE VENUE ZONES', publishedPrice: 'PUBLISHED PRICE INFO',
	backToTickets: 'My tickets', sampleCodeNote: 'Decorative artwork · not an entry code', showStarts: 'SHOW STARTS', venueLabel: 'VENUE', gmailOnly: 'Use a Gmail address ending in @gmail.com.', zoneInfoNote: 'Published venue zones only; no zone or seat is assigned to this sample.',
	seatInfoTitle: 'Ticket information', sampleReference: 'Sample reference', listedPrice: 'Listed price information',
	transferPageTitle: 'Transfer a ticket', transferPageIntro: 'Enter the recipient’s Gmail address to review this sample transfer.',
	continueReview: 'Review transfer', back: 'Back', sendingTransfer: 'Preparing transfer…', sendingDescription: 'Saving the sample transfer',
	transferDone: 'Transfer complete', transferDoneDetail: 'The sample transfer is recorded in this browser. This is not a real ticket.',
	transferNeedsHosting: 'To email a working link, host this demo on a public HTTPS address first. No email was sent.',
	transferReviewText: 'This demo saves the transfer in this browser. After confirming, you can send a view-only sample ticket link from Gmail. No real entry code is issued.',
	notifyRecipient: 'Open Gmail to notify recipient', sharedTicketHeading: 'Shared ticket · view only', sharedTicketNotice: 'SAMPLE ONLY · NOT VALID FOR ENTRY',
	confirmTransfer: 'Confirm transfer', transferSuccessTitle: 'Sample transfer complete', transferSuccessText: 'The sample transfer is saved here. No email was sent.',
	done: 'Done', ticketDemoNotice: 'SAMPLE', closeTransfer: 'Close transfer', unassigned: 'Not assigned',
	successEyebrow: "IT'S OFFICIAL", successTitle: "You're <em>going.</em>", seeTicket: 'See my ticket',
	closeDetails: 'Close event details', closeConfirm: 'Close confirmation', successEyebrow: 'SAMPLE SAVED', successTitle: 'Added to <em>wallet.</em>',
});
Object.assign(translations.es, {
	featuredTitle: 'ARIRANG<br>en Lima', featuredVenue: 'Estadio San Marcos · Lima, Perú', featuredMonth: 'OCTUBRE DE 2026', showCount: '3 CONCIERTOS',
	walletCount: count => `${count} ${count === 1 ? 'ENTRADA' : 'ENTRADAS'}`,
	ticketActions: 'Acciones de la entrada', deleteTicket: 'Eliminar entrada', confirmDeleteTicket: '¿Eliminar esta entrada de Mis entradas?',
	checkoutFree: 'TOTAL DE MUESTRA · $0', createDemo: 'Añadir entrada de muestra',
	demoWarning: 'MUESTRA', priceTba: 'PRECIO POR CONFIRMAR', sampleTotal: 'Total de muestra',
	entryCodeNotIssued: 'CÓDIGO DE INGRESO NO EMITIDO', transferReviewTitle: 'Revisar transferencia', transferSent: 'TRANSFERENCIA DE MUESTRA GUARDADA',
	sectionLabel: 'SECTOR', rowLabel: 'FILA', seatLabel: 'ASIENTO', doorsOpen: 'APERTURA DE PUERTAS', venueZones: 'ZONAS DISPONIBLES', publishedPrice: 'PRECIO PUBLICADO',
	backToTickets: 'Mis entradas', sampleCodeNote: 'Diseño decorativo · no es un código de ingreso', showStarts: 'INICIO DEL CONCIERTO', venueLabel: 'RECINTO', gmailOnly: 'Usa una dirección de Gmail que termine en @gmail.com.', zoneInfoNote: 'Zonas publicadas del recinto; esta muestra no tiene sector ni asiento asignado.',
	seatInfoTitle: 'Información de la entrada', sampleReference: 'Referencia de muestra', listedPrice: 'Información de precios publicada',
	transferPageTitle: 'Transferir entrada', transferPageIntro: 'Escribe el Gmail de quien recibe para revisar esta transferencia de muestra.',
	continueReview: 'Revisar transferencia', back: 'Volver', sendingTransfer: 'Preparando transferencia…', sendingDescription: 'Guardando la transferencia de muestra',
	transferDone: 'Transferencia completada', transferDoneDetail: 'La transferencia de muestra se guardó en este navegador. Esta no es una entrada real.',
	transferNeedsHosting: 'Para enviar un enlace que funcione, primero publica esta demo en una dirección HTTPS pública. No se envió ningún correo.',
	transferReviewText: 'Esta demo guarda la transferencia en este navegador. Después de confirmarla, puedes enviar un enlace de muestra de solo lectura desde Gmail. No se emite un código de ingreso real.',
	notifyRecipient: 'Abrir Gmail para avisar', sharedTicketHeading: 'Entrada compartida · solo lectura', sharedTicketNotice: 'SOLO MUESTRA · NO VÁLIDA PARA INGRESAR',
	confirmTransfer: 'Confirmar transferencia', transferSuccessTitle: 'Transferencia de muestra completada', transferSuccessText: 'La transferencia de muestra quedó guardada aquí. No se envió ningún correo.',
	done: 'Listo', ticketDemoNotice: 'MUESTRA', closeTransfer: 'Cerrar transferencia', unassigned: 'Sin asignar',
	successEyebrow: '¡YA ES OFICIAL!', successTitle: 'Vas a <em>ir.</em>', seeTicket: 'Ver mi entrada',
	closeDetails: 'Cerrar detalles del evento', closeConfirm: 'Cerrar confirmación', successEyebrow: 'MUESTRA GUARDADA', successTitle: 'Añadida a <em>entradas.</em>',
});

let language = localStorage.getItem('quentro-language') || 'en';

function tr(key) {
	return translations[language][key] || translations.en[key] || key;
}

function localizedCategory(event) {
	if (event.official) return language === 'es' ? 'BTS · GIRA MUNDIAL' : 'BTS · WORLD TOUR';
	if (event.unconfirmed) return language === 'es' ? 'BTS · FECHA POR CONFIRMAR' : 'BTS · DATE TBA';
	if (language !== 'es') return event.categoryLabel;
	return ({ 'LIVE MUSIC': 'MÚSICA EN VIVO', 'ART & CULTURE': 'ARTE Y CULTURA', 'FOOD & DRINK': 'COMIDA Y BEBIDA', NIGHTLIFE: 'VIDA NOCTURNA' })[event.categoryLabel] || event.categoryLabel;
}

function localizedTag(event) {
	if (language === 'es' && event.tagEs) return event.tagEs;
	if (language !== 'es') return event.tag;
	return ({ 'SELLING FAST': 'ALTA DEMANDA', 'JUST ADDED': 'RECIÉN AGREGADO', 'GOOD SEATS LEFT': 'BUENOS LUGARES', 'ROOFTOP SEASON': 'TEMPORADA DE AZOTEA', 'A LITTLE DIFFERENT': 'ALGO DIFERENTE', 'FEW TABLES LEFT': 'POCAS MESAS', 'OPEN AIR CINEMA': 'CINE AL AIRE LIBRE', 'DANCE FLOOR ONLY': 'SOLO PISTA DE BAILE' })[event.tag] || event.tag;
}

function eventCategory(event) {
	if (event.official) return tr('officialEvent');
	if (event.unconfirmed) return language === 'es' ? 'BTS · FECHA POR CONFIRMAR' : event.categoryLabel;
	return tr(({ music: 'liveMusic', art: 'artCulture', food: 'foodDrink', nightlife: 'nightlifeLabel' })[event.category]);
}

function eventDate(event) {
	const date = language === 'es' ? event.dateEs || event.date : event.date;
	if (!event.official) return date;
	return language === 'es' ? `${date} 2026` : `${date}, 2026`;
}

function eventTag(event) {
	if (event.tagEs && language === 'es') return event.tagEs;
	const key = ({ 'SELLING FAST': 'sellingFast', 'JUST ADDED': 'justAdded', 'GOOD SEATS LEFT': 'goodSeats', 'ROOFTOP SEASON': 'rooftopSeason', 'A LITTLE DIFFERENT': 'littleDifferent', 'FEW TABLES LEFT': 'fewTables', 'OPEN AIR CINEMA': 'openAir', 'DANCE FLOOR ONLY': 'danceFloor' })[event.tag];
	return key ? tr(key) : event.tag;
}

const savedTickets = JSON.parse(localStorage.getItem('quentro-tickets') || '[]').map(ticket => ({
	...ticket,
	purchaseId: ticket.purchaseId?.replace(/^DEMO-/, 'SAMPLE-') || `SAMPLE-${Date.now().toString(36).toUpperCase()}`
}));
localStorage.setItem('quentro-tickets', JSON.stringify(savedTickets));
const eventGrid = document.querySelector('#event-grid');
const eventSearch = document.querySelector('#event-search');
let activeCategory = 'all';
let walletMode = 'upcoming';
let activeEvent = null;
let pendingTransfer = null;
let transferTimer = null;
const expandedTicketIds = new Set();

function imageUrl(photo, width = 900) {
	if (photo.startsWith('http')) return photo;
	return `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=${width}&q=82`;
}

function applyLanguage() {
	document.documentElement.lang = language;
	document.querySelector('#language-select').value = language;
	document.querySelectorAll('[data-i18n]').forEach(element => { element.textContent = tr(element.dataset.i18n); });
	document.querySelectorAll('[data-i18n-html]').forEach(element => { element.innerHTML = tr(element.dataset.i18nHtml); });
	document.querySelectorAll('[data-i18n-placeholder]').forEach(element => { element.placeholder = tr(element.dataset.i18nPlaceholder); });
	document.querySelectorAll('[data-i18n-aria]').forEach(element => { element.setAttribute('aria-label', tr(element.dataset.i18nAria)); });
	const dateFilter = document.querySelector('#date-filter');
	dateFilter.options[0].text = tr('dateAny');
	dateFilter.options[1].text = tr('dateWeekend');
	dateFilter.options[2].text = tr('dateWeek');
	document.querySelector('#event-dialog [data-close-dialog]').setAttribute('aria-label', tr('closeDetails'));
	document.querySelector('#success-dialog [data-close-success]').setAttribute('aria-label', tr('closeConfirm'));
	document.querySelector('#transfer-dialog [data-close-transfer]').setAttribute('aria-label', tr('closeTransfer'));
	document.querySelector('#ticket-view-dialog [data-close-ticket]').setAttribute('aria-label', tr('backToTickets'));
	renderEvents();
	renderWallet();
}

function renderEvents() {
	const query = eventSearch.value.trim().toLowerCase();
	const weekendOnly = document.querySelector('#date-filter').value === 'weekend';
	const thisWeek = document.querySelector('#date-filter').value === 'week';
	const underPrice = document.querySelector('#price-filter').checked;
	const filtered = events.filter(event => {
		const matchesCategory = activeCategory === 'all' || event.category === activeCategory;
		const matchesSearch = !query || `${event.title} ${event.venue} ${event.neighborhood} ${event.categoryLabel} ${event.description}`.toLowerCase().includes(query);
		const matchesDate = (!weekendOnly || event.dateGroup === 'weekend') && (!thisWeek || ['weekend', 'week'].includes(event.dateGroup));
		return matchesCategory && matchesSearch && matchesDate && (!underPrice || event.price !== null && event.price < 50);
	});
	eventGrid.innerHTML = filtered.map((event, index) => `
		<article class="event-card" style="--card-index:${index}">
			<button class="event-card-image" data-event="${event.id}" aria-label="${language === 'es' ? 'Ver' : 'View'} ${event.titleEs || event.title}"><img src="${imageUrl(event.image)}" alt="${event.alt}" loading="lazy"><span class="event-tag">${localizedTag(event)}</span><span class="event-card-arrow">↗</span></button>
			<div class="event-card-meta"><span>${localizedCategory(event)}</span><span>${eventDate(event)}</span></div>
			<button class="event-title-button" data-event="${event.id}">${language === 'es' ? event.titleEs || event.title : event.title}</button>
			<div class="event-card-footer"><span>${language === 'es' ? event.venueEs || event.venue : event.venue} <i>·</i> ${event.neighborhood}</span><span class="event-price">${event.price === null ? event.official ? tr('soldOut') : tr('priceTba') : `$${event.price}<small>+</small>`}</span></div>
		</article>`).join('');
	document.querySelector('#empty-state').hidden = filtered.length > 0;
	document.querySelector('#load-more').hidden = filtered.length === 0;
}

function openEvent(eventId) {
	activeEvent = events.find(event => event.id === eventId);
	if (!activeEvent) return;
	const localizedTitle = language === 'es' ? activeEvent.titleEs || activeEvent.title : activeEvent.title;
	const localizedDate = eventDate(activeEvent);
	const localizedTime = language === 'es' ? activeEvent.timeEs || activeEvent.time : activeEvent.time;
	const localizedVenue = language === 'es' ? activeEvent.venueEs || activeEvent.venue : activeEvent.venue;
	const localizedDescription = language === 'es' ? activeEvent.descriptionEs || activeEvent.description : activeEvent.description;
	document.querySelector('#dialog-content').innerHTML = `
		<img class="dialog-image" src="${imageUrl(activeEvent.image, 1200)}" alt="${activeEvent.alt}">
		<div class="dialog-event-content"><p class="eyebrow"><span class="eyebrow-line"></span> ${activeEvent.official || activeEvent.unconfirmed ? localizedCategory(activeEvent) : activeEvent.categoryLabel}</p><h2>${localizedTitle}</h2><p class="dialog-description">${localizedDescription}</p><div class="dialog-facts"><div><span>${tr('when')}</span><strong>${localizedDate} · ${localizedTime}</strong></div><div><span>${tr('where')}</span><strong>${localizedVenue} · ${activeEvent.neighborhood}</strong></div></div>${activeEvent.official ? `<p class="unconfirmed-notice">${tr('soldOut')}</p>` : activeEvent.unconfirmed ? `<p class="unconfirmed-notice">${tr('unconfirmedNotice')}</p>` : ''}${activeEvent.official ? `<p class="public-price-info"><strong>${tr('listedPrice')}</strong>${language === 'es' ? activeEvent.publicPriceEs : activeEvent.publicPrice}<br><a class="official-link" href="${activeEvent.officialUrl}" target="_blank" rel="noopener noreferrer">${language === 'es' ? 'Ver en Ticketmaster ↗' : 'View on Ticketmaster ↗'}</a></p>` : ''}<div class="checkout-row"><div><span>${activeEvent.price === null ? tr('sampleTotal') : tr('generalAdmission')}</span><strong>${activeEvent.price === null ? '$0.00' : `$${activeEvent.price} <small>${tr('perPerson')}</small>`}</strong><small>${tr('checkoutFree')}</small></div><button class="dark-button" id="buy-ticket">${tr('createDemo')} <span>↗</span></button></div></div>`;
	document.querySelector('#event-dialog').showModal();
}

function buyTicket() {
	if (!activeEvent) return;
	const ticket = { ...activeEvent, purchaseId: `SAMPLE-${Date.now().toString(36).toUpperCase()}`, purchasedAt: Date.now(), attendee: tr('unassigned'), ticketType: tr('generalAdmission'), section: tr('unassigned'), row: tr('unassigned'), seat: tr('unassigned'), demoTicket: true, transferredTo: '', transferHistory: [] };
	expandedTicketIds.add(ticket.purchaseId);
	savedTickets.unshift(ticket);
	localStorage.setItem('quentro-tickets', JSON.stringify(savedTickets));
	document.querySelector('#event-dialog').close();
	document.querySelector('#success-message').textContent = language === 'es' ? `${activeEvent.title} · ${activeEvent.date}. Entrada de muestra añadida a Mis entradas.` : `${activeEvent.title} · ${activeEvent.date}. Sample ticket added to My tickets.`;
	document.querySelector('#success-dialog').showModal();
	renderWallet();
}

function renderWallet() {
	const filtered = savedTickets.filter(ticket => walletMode === 'upcoming' ? ticket : false);
	document.querySelector('#ticket-count').textContent = savedTickets.length;
	document.querySelector('#mobile-ticket-count').textContent = savedTickets.length;
	document.querySelector('#upcoming-count').textContent = savedTickets.length;
	document.querySelector('#wallet-total').textContent = tr('walletCount')(filtered.length);
	document.querySelector('#wallet-empty').hidden = filtered.length > 0;
	document.querySelector('#ticket-list').innerHTML = filtered.map(ticket => {
		const ticketTitle = language === 'es' ? ticket.titleEs || ticket.title : ticket.title;
		const ticketDate = eventDate(ticket);
		const ticketTime = language === 'es' ? ticket.timeEs || ticket.time : ticket.time;
		const ticketVenue = language === 'es' ? ticket.venueEs || ticket.venue : ticket.venue;
		const seatDetails = { section: tr('unassigned'), row: tr('unassigned'), seat: tr('unassigned') };
		return `
		<article class="wallet-ticket" data-ticket-card="${ticket.purchaseId}">
			<button class="wallet-ticket-main" data-open-ticket="${ticket.purchaseId}" aria-label="${tr('ticketDetails')}: ${ticketTitle}"><img src="${imageUrl(ticket.image)}" alt="${ticket.alt}"><div class="wallet-ticket-details"><span class="ticket-validity-badge">${tr('ticketDemoNotice')}</span><p class="event-card-meta">${localizedCategory(ticket)} <span>${ticketDate}</span></p><h2>${ticketTitle}</h2><p>${ticketTime} <i>·</i> ${ticketVenue}, ${ticket.neighborhood}</p><span class="ticket-code">${ticket.purchaseId}</span><span class="ticket-open-hint">${tr('ticketDetails')} ↗</span></div></button>
			<div class="wallet-ticket-right"><button class="ticket-menu-trigger" data-ticket-menu aria-label="${tr('ticketActions')}" aria-expanded="false" title="${tr('ticketActions')}">⋯</button><div class="ticket-action-menu" hidden><button class="delete-ticket-button" data-delete-ticket="${ticket.purchaseId}">${tr('deleteTicket')}</button></div><span class="transfer-status">${ticket.transferredTo ? tr('transferSent') : tr('entryCodeNotIssued')}</span><button class="transfer-toggle" data-transfer="${ticket.purchaseId}">${tr('transfer')}</button></div>
		</article>`;
	}).join('');
}

function openTicket(ticketId) {
	const ticket = savedTickets.find(item => item.purchaseId === ticketId);
	if (!ticket) return;
	const officialInfo = events.find(event => event.id === ticket.id) || {};
	const suppliedDetails = suppliedSampleDetails[ticket.id] || {};
	const title = language === 'es' ? ticket.titleEs || ticket.title : ticket.title;
	const date = language === 'es' ? suppliedDetails.dateEs || eventDate(ticket) : suppliedDetails.date || eventDate(ticket);
	const time = language === 'es' ? suppliedDetails.timeEs || ticket.timeEs || ticket.time : suppliedDetails.time || ticket.time;
	const venue = language === 'es' ? ticket.venueEs || ticket.venue : ticket.venue;
	const section = language === 'es' ? suppliedDetails.sectionEs || suppliedDetails.section || tr('unassigned') : suppliedDetails.section || tr('unassigned');
	const row = language === 'es' ? suppliedDetails.rowEs || suppliedDetails.row || tr('unassigned') : suppliedDetails.row || tr('unassigned');
	const seat = language === 'es' ? suppliedDetails.seatEs || suppliedDetails.seat || tr('unassigned') : suppliedDetails.seat || tr('unassigned');
	const ticketType = suppliedDetails.ticketType || ticket.ticketType;
	const doors = language === 'es' ? ticket.doorsEs || officialInfo.doorsEs || ticket.doors || officialInfo.doors || tr('unassigned') : ticket.doors || officialInfo.doors || tr('unassigned');
	const mapZoneClass = suppliedDetails.mapZone === 'north' ? 'map-zone-north' : suppliedDetails.mapZone === 'east-lower' ? 'map-zone-east-lower' : 'map-zone-lower-bowl';
	const mapLabels = language === 'es'
		? { north: 'NORTE', west: 'OCCIDENTE', eastUpper: 'ORIENTAL ALTA', eastLower: 'ORIENTAL BAJA', south: 'SUR', field: 'CANCHA' }
		: { north: 'NORTH', west: 'WEST', eastUpper: 'EAST UPPER', eastLower: 'EAST LOWER', south: 'SOUTH', field: 'FIELD' };
	const mapMarkup = suppliedDetails.mapZone ? `<figure class="ticket-venue-map"><figcaption><span>${language === 'es' ? 'MAPA DEL RECINTO' : 'VENUE MAP'}</span><strong>${language === 'es' ? 'SECTOR DESTACADO' : 'HIGHLIGHTED SECTION'} · ${section}</strong></figcaption><div class="venue-map ${mapZoneClass}" role="img" aria-label="${language === 'es' ? 'Mapa ilustrativo que destaca' : 'Illustrative map highlighting'} ${section}"><span class="map-compass">N ↑</span><span class="map-section map-north">${mapLabels.north}</span><span class="map-section map-west">${mapLabels.west}</span><span class="map-field">${mapLabels.field}</span><span class="map-section map-east-upper">${mapLabels.eastUpper}</span><span class="map-section map-east-lower">${mapLabels.eastLower}</span><span class="map-section map-south">${mapLabels.south}</span></div><p>${language === 'es' ? 'Esquema ilustrativo; no está a escala ni representa el plano oficial.' : 'Illustrative diagram; not to scale and not the official venue plan.'}</p></figure>` : '';
	const transferAction = ticket.transferredTo ? `<p class="transfer-status ticket-transfer-status">${tr('transferSent')}: ${ticket.transferredTo}</p>` : `<button class="dark-button ticket-transfer-cta" data-transfer="${ticket.purchaseId}">${tr('transfer')} <span>↗</span></button>`;
	document.querySelector('#ticket-view-content').innerHTML = `
		<div class="sample-ticket-page">
			<section class="sample-pass">
				<div class="sample-poster"><img src="${imageUrl(ticket.image, 1200)}" alt="${ticket.alt}"><div class="poster-caption"><strong>${title}</strong><span>${ticket.neighborhood}</span></div></div>
				<div class="sample-code-panel"><img class="sample-code-image" src="sample-code-art.svg" alt="${tr('sampleCodeNote')}"><div class="sample-code-meta"><strong>${tr('entryCodeNotIssued')}</strong></div></div>
			</section>
			<section class="sample-ticket-info">
				<div class="ticket-info-grid">
					<div><span>${tr('sectionLabel')}</span><strong>${section}</strong></div><div><span>${tr('rowLabel')}</span><strong>${row}</strong></div><div><span>${tr('seatLabel')}</span><strong>${seat}</strong></div>${suppliedDetails.ticketType ? `<div><span>${tr('ticketType')}</span><strong>${ticketType}</strong></div>` : ''}
					<div><span>${tr('doorsOpen')}</span><strong>${doors}</strong></div><div><span>${tr('showStarts')}</span><strong>${date} · ${time}</strong></div><div><span>${tr('venueLabel')}</span><strong>${venue}</strong></div>
				</div>
				${mapMarkup}
				<p class="sample-ticket-note">${tr('ticketDemoNotice')}</p>${transferAction}
			</section>
		</div>`;
	document.querySelector('#ticket-view-dialog').showModal();
}

function openTransfer(ticketId) {
	const ticket = savedTickets.find(item => item.purchaseId === ticketId);
	if (!ticket || ticket.transferredTo) return false;
	pendingTransfer = { ticketId, email: '' };
	renderTransferEmail();
	document.querySelector('#transfer-dialog').showModal();
	return true;
}

function renderTransferEmail() {
	const ticket = savedTickets.find(item => item.purchaseId === pendingTransfer?.ticketId);
	if (!ticket) return;
	document.querySelector('#transfer-dialog-content').innerHTML = `<section class="transfer-stage"><p class="eyebrow">${tr('transferPageTitle')}</p><h1>${tr('transferPageTitle')}</h1><p>${tr('transferPageIntro')}</p><div class="transfer-target"><span>${ticket.title}</span><strong>${eventDate(ticket)} · ${ticket.venue}</strong></div><form id="transfer-email-form" class="transfer-email-form"><label for="transfer-gmail">Gmail</label><input id="transfer-gmail" name="email" type="email" autocomplete="email" placeholder="name@gmail.com" required pattern=".+@gmail\\.com" value="${pendingTransfer.email}"><small>${tr('gmailOnly')}</small><div class="transfer-stage-actions"><button class="dark-button" type="submit">${tr('continueReview')} <span>↗</span></button></div></form></section>`;
}

function renderTransferReview() {
	const ticket = savedTickets.find(item => item.purchaseId === pendingTransfer?.ticketId);
	if (!ticket) return;
	const suppliedDetails = suppliedSampleDetails[ticket.id] || {};
	const section = language === 'es' ? suppliedDetails.sectionEs || suppliedDetails.section || tr('unassigned') : suppliedDetails.section || tr('unassigned');
	const row = language === 'es' ? suppliedDetails.rowEs || suppliedDetails.row || tr('unassigned') : suppliedDetails.row || tr('unassigned');
	const seat = language === 'es' ? suppliedDetails.seatEs || suppliedDetails.seat || tr('unassigned') : suppliedDetails.seat || tr('unassigned');
	document.querySelector('#transfer-dialog-content').innerHTML = `<section class="transfer-stage"><p class="eyebrow">${tr('transferReviewTitle')}</p><h1>${tr('transferReviewTitle')}</h1><div class="transfer-target"><span>${ticket.title}</span><strong>${eventDate(ticket)} · ${ticket.venue}</strong></div><dl class="transfer-review-list"><div><dt>${tr('recipientEmail')}</dt><dd>${pendingTransfer.email}</dd></div><div><dt>${tr('sectionLabel')}</dt><dd>${section}</dd></div><div><dt>${tr('rowLabel')}</dt><dd>${row}</dd></div><div><dt>${tr('seatLabel')}</dt><dd>${seat}</dd></div></dl><p class="transfer-disclosure">${tr('transferReviewText')}</p><div class="transfer-stage-actions"><button class="text-button" data-transfer-back>${tr('back')}</button><button class="dark-button" id="confirm-sample-transfer">${tr('confirmTransfer')} <span>↗</span></button></div></section>`;
}

function renderTransferSending() {
	document.querySelector('#transfer-dialog-content').innerHTML = `<section class="transfer-stage transfer-sending"><span class="sending-spinner" aria-hidden="true"></span><h1>${tr('sendingTransfer')}</h1><p>${tr('sendingDescription')}</p><div class="sending-progress"><span></span></div></section>`;
}

function completeSampleTransfer() {
	if (!pendingTransfer) return;
	const ticket = savedTickets.find(item => item.purchaseId === pendingTransfer.ticketId);
	if (!ticket) return;
	ticket.transferHistory ||= [];
	ticket.transferHistory.push({ to: pendingTransfer.email, at: Date.now() });
	ticket.transferredTo = pendingTransfer.email;
	localStorage.setItem('quentro-tickets', JSON.stringify(savedTickets));
	const sharedUrl = new URL(window.location.href);
	sharedUrl.hash = `shared-ticket=${btoa(JSON.stringify({ eventId: ticket.id, purchaseId: ticket.purchaseId })).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')}`;
	const subject = language === 'es' ? 'Tu entrada de muestra de Quentro' : 'Your Quentro sample ticket';
	const body = language === 'es'
		? `Aquí tienes el enlace de solo lectura a la entrada de muestra:\n${sharedUrl.href}\n\nEsta muestra no es válida para ingresar.`
		: `Here is your view-only sample ticket link:\n${sharedUrl.href}\n\nThis sample is not valid for entry.`;
	const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(pendingTransfer.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
	const canNotify = window.location.protocol === 'https:' && !['localhost', '127.0.0.1', '::1'].includes(window.location.hostname);
	const notificationAction = canNotify
		? `<a class="dark-button" href="${gmailUrl}" target="_blank" rel="noopener noreferrer">${tr('notifyRecipient')} <span>↗</span></a>`
		: `<p>${tr('transferNeedsHosting')}</p>`;
	document.querySelector('#transfer-dialog-content').innerHTML = `<section class="transfer-stage transfer-complete"><span class="transfer-check">✓</span><p class="eyebrow">${tr('transferDone')}</p><h1>${tr('transferDone')}</h1><p>${tr('transferDoneDetail')}</p><strong>${pendingTransfer.email}</strong>${notificationAction}<button class="text-button" data-finish-transfer>${tr('done')}</button></section>`;
	renderWallet();
}

function openSharedTicketFromLink() {
	const match = window.location.hash.match(/^#shared-ticket=([A-Za-z0-9_-]+)$/);
	if (!match) return;
	try {
		const base64 = match[1].replace(/-/g, '+').replace(/_/g, '/') + '='.repeat((4 - match[1].length % 4) % 4);
		const sharedTicket = JSON.parse(atob(base64));
		const event = events.find(item => item.id === sharedTicket.eventId);
		if (!event || typeof sharedTicket.purchaseId !== 'string' || !/^[A-Za-z0-9-]{1,80}$/.test(sharedTicket.purchaseId)) return;
		const suppliedDetails = suppliedSampleDetails[event.id] || {};
		const title = language === 'es' ? event.titleEs || event.title : event.title;
		const date = language === 'es' ? suppliedDetails.dateEs || eventDate(event) : suppliedDetails.date || eventDate(event);
		const time = language === 'es' ? suppliedDetails.timeEs || event.timeEs || event.time : suppliedDetails.time || event.time;
		const venue = language === 'es' ? event.venueEs || event.venue : event.venue;
		const section = language === 'es' ? suppliedDetails.sectionEs || suppliedDetails.section || tr('unassigned') : suppliedDetails.section || tr('unassigned');
		const row = language === 'es' ? suppliedDetails.rowEs || suppliedDetails.row || tr('unassigned') : suppliedDetails.row || tr('unassigned');
		const seat = language === 'es' ? suppliedDetails.seatEs || suppliedDetails.seat || tr('unassigned') : suppliedDetails.seat || tr('unassigned');
		document.querySelector('#ticket-view-content').innerHTML = `<div class="sample-ticket-page"><p class="ticket-validity-badge">${tr('sharedTicketHeading')}</p><section class="sample-pass"><div class="sample-poster"><img src="${imageUrl(event.image, 1200)}" alt="${event.alt}"><div class="poster-caption"><strong>${title}</strong><span>${event.neighborhood}</span></div></div><div class="sample-code-panel"><img class="sample-code-image" src="sample-code-art.svg" alt="${tr('sampleCodeNote')}"><div class="sample-code-meta"><strong>${tr('entryCodeNotIssued')}</strong><strong>${tr('sharedTicketNotice')}</strong></div></div></section><section class="sample-ticket-info"><div class="ticket-info-grid"><div><span>${tr('sectionLabel')}</span><strong>${section}</strong></div><div><span>${tr('rowLabel')}</span><strong>${row}</strong></div><div><span>${tr('seatLabel')}</span><strong>${seat}</strong></div><div><span>${tr('showStarts')}</span><strong>${date} · ${time}</strong></div><div><span>${tr('venueLabel')}</span><strong>${venue}</strong></div><div><span>${tr('sampleReference')}</span><strong>${sharedTicket.purchaseId}</strong></div></div><p class="sample-ticket-note">${tr('sharedTicketNotice')}</p></section></div>`;
		document.querySelector('#ticket-view-dialog').showModal();
	} catch {
		return;
	}
}

function setView(view) {
	const showingTickets = view === 'tickets';
	document.querySelector('#discover-view').hidden = showingTickets;
	document.querySelector('#tickets-view').hidden = !showingTickets;
	document.querySelectorAll('[data-view]').forEach(button => button.classList.toggle('active', button.dataset.view === view));
	if (showingTickets) renderWallet();
	window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('click', event => {
	if (!event.target.closest('.wallet-ticket-right')) {
		document.querySelectorAll('.ticket-action-menu').forEach(menu => { menu.hidden = true; });
		document.querySelectorAll('[data-ticket-menu]').forEach(button => button.setAttribute('aria-expanded', 'false'));
	}
	const ticketMenuButton = event.target.closest('[data-ticket-menu]');
	if (ticketMenuButton) {
		const menu = ticketMenuButton.nextElementSibling;
		menu.hidden = !menu.hidden;
		ticketMenuButton.setAttribute('aria-expanded', String(!menu.hidden));
	}
	const deleteTicketButton = event.target.closest('[data-delete-ticket]');
	if (deleteTicketButton && window.confirm(tr('confirmDeleteTicket'))) {
		const ticketId = deleteTicketButton.dataset.deleteTicket;
		const ticketIndex = savedTickets.findIndex(ticket => ticket.purchaseId === ticketId);
		if (ticketIndex !== -1) {
			savedTickets.splice(ticketIndex, 1);
			localStorage.setItem('quentro-tickets', JSON.stringify(savedTickets));
			expandedTicketIds.delete(ticketId);
			if (document.querySelector('#ticket-view-dialog').open && document.querySelector('#ticket-view-content').textContent.includes(ticketId)) {
				document.querySelector('#ticket-view-dialog').close();
			}
			renderWallet();
		}
	}
	const eventButton = event.target.closest('[data-event]');
	const viewButton = event.target.closest('[data-view]');
	if (eventButton) openEvent(eventButton.dataset.event);
	if (viewButton) setView(viewButton.dataset.view);
	const ticketButton = event.target.closest('[data-open-ticket]');
	if (ticketButton) openTicket(ticketButton.dataset.openTicket);
	if (event.target.closest('#buy-ticket')) buyTicket();
	if (event.target.closest('#confirm-sample-transfer')) {
		renderTransferSending();
		transferTimer = window.setTimeout(completeSampleTransfer, 1400);
	}
	if (event.target.closest('[data-finish-transfer]')) {
		pendingTransfer = null;
		document.querySelector('#transfer-dialog').close();
	}
	if (event.target.closest('[data-transfer-back]')) renderTransferEmail();
	if (event.target.closest('[data-cancel-transfer-dialog]')) {
		pendingTransfer = null;
		document.querySelector('#transfer-dialog').close();
	}
	if (event.target.closest('[data-close-transfer]')) {
		pendingTransfer = null;
		window.clearTimeout(transferTimer);
		document.querySelector('#transfer-dialog').close();
	}
	if (event.target.closest('[data-close-ticket]')) document.querySelector('#ticket-view-dialog').close();
	const notifyButton = event.target.closest('#notify-event');
	if (notifyButton) {
		const interested = new Set(JSON.parse(localStorage.getItem('quentro-interests') || '[]'));
		interested.add(activeEvent.id);
		localStorage.setItem('quentro-interests', JSON.stringify([...interested]));
		notifyButton.textContent = language === 'es' ? 'Te avisaremos' : 'You’re on the list';
		notifyButton.disabled = true;
	}
	if (event.target.closest('[data-close-dialog]')) document.querySelector('#event-dialog').close();
	if (event.target.closest('[data-close-success]')) document.querySelector('#success-dialog').close();
	if (event.target.closest('#view-ticket-button')) {
		document.querySelector('#success-dialog').close();
		setView('tickets');
	}
	const categoryButton = event.target.closest('[data-category]');
	if (categoryButton) {
		activeCategory = categoryButton.dataset.category;
		document.querySelectorAll('[data-category]').forEach(button => button.classList.toggle('selected', button === categoryButton));
		renderEvents();
	}
	const walletButton = event.target.closest('[data-wallet]');
	if (walletButton) {
		walletMode = walletButton.dataset.wallet;
		document.querySelectorAll('[data-wallet]').forEach(button => button.classList.toggle('active', button === walletButton));
		renderWallet();
	}
	const detailsButton = event.target.closest('.ticket-details-toggle');
	if (detailsButton) {
		const details = detailsButton.nextElementSibling;
		details.hidden = !details.hidden;
		const ticketId = detailsButton.closest('[data-ticket-card]').dataset.ticketCard;
		if (details.hidden) expandedTicketIds.delete(ticketId);
		else expandedTicketIds.add(ticketId);
		detailsButton.setAttribute('aria-expanded', String(!details.hidden));
		detailsButton.querySelector('span').textContent = details.hidden ? '＋' : '−';
	}
	const transferButton = event.target.closest('[data-transfer]');
	if (transferButton) {
		if (openTransfer(transferButton.dataset.transfer) && document.querySelector('#ticket-view-dialog').open) document.querySelector('#ticket-view-dialog').close();
	}
});

document.querySelector('#language-select').addEventListener('change', event => {
	language = event.currentTarget.value;
	localStorage.setItem('quentro-language', language);
	applyLanguage();
});

document.querySelector('#transfer-dialog').addEventListener('submit', event => {
	if (event.target.id !== 'transfer-email-form') return;
	event.preventDefault();
	const email = new FormData(event.target).get('email').trim();
	if (!/^[^\s@]+@gmail\.com$/i.test(email)) {
		event.target.querySelector('input').setCustomValidity(tr('gmailOnly'));
		event.target.reportValidity();
		return;
	}
	pendingTransfer.email = email;
	renderTransferReview();
});

eventSearch.addEventListener('input', renderEvents);
document.querySelector('#date-filter').addEventListener('change', renderEvents);
document.querySelector('#price-filter').addEventListener('change', renderEvents);
document.querySelector('#filter-toggle').addEventListener('click', event => {
	const panel = document.querySelector('#filter-panel');
	panel.hidden = !panel.hidden;
	event.currentTarget.setAttribute('aria-expanded', String(!panel.hidden));
	document.querySelector('#filter-count').textContent = document.querySelector('#price-filter').checked || document.querySelector('#date-filter').value !== 'any' ? '1' : '';
});
document.querySelector('#event-dialog').addEventListener('click', event => {
	if (event.target === event.currentTarget) event.currentTarget.close();
});
document.querySelector('#success-dialog').addEventListener('click', event => {
	if (event.target === event.currentTarget) event.currentTarget.close();
});
document.querySelector('#transfer-dialog').addEventListener('click', event => {
	if (event.target === event.currentTarget) {
		pendingTransfer = null;
		window.clearTimeout(transferTimer);
		event.currentTarget.close();
	}
});
document.querySelector('#ticket-view-dialog').addEventListener('click', event => {
	if (event.target === event.currentTarget) event.currentTarget.close();
});
renderEvents();
renderWallet();
	applyLanguage();
openSharedTicketFromLink();
