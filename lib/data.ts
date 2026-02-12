import catalog from '@/data/catalog.json';
import tickets from '@/data/tickets.json';
import sponsorship from '@/data/sponsorship.json';

export type CatalogItem = (typeof catalog)[number];
export type TicketType = (typeof tickets)[number];
export type SponsorshipTier = (typeof sponsorship)[number];

export const catalogItems = catalog;
export const ticketTypes = tickets;
export const sponsorshipTiers = sponsorship;

export const categoryFilters = ['All', 'Sand Show', 'Arts & Crafts', 'Research', 'Goodies', 'Books'] as const;
