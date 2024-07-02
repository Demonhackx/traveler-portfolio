import { Component } from '@angular/core';

interface Destination {
  name: string;
  description: string;
  imageUrl: string;
  explore: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title="Places to Explore";
  searchText: string = '';
  destinations = [
    {
      name: 'Rome',
      description: 'The historic and beautifull city of Rome, Italy.',
      imageUrl: 'assets/images/roma.jpg',
      explore: 'https://it.wikipedia.org/wiki/Roma'
    },
    {
      name: 'Tokyo',
      description: 'Explore the bustling city of Tokyo, Japan.',
      imageUrl: 'assets/images/tokyo.jpg',
      explore: 'https://it.wikipedia.org/wiki/Tokyo'
    },
    {
      name: 'New York City',
      description: 'Discover the vibrant culture of New York City, USA.',
      imageUrl: 'assets/images/new-york.jpg',
      explore: 'https://en.wikipedia.org/wiki/New_York_City'
    },
    {
      name: 'Paris',
      description: 'Experience the romance and charm of Paris, France.',
      imageUrl: 'assets/images/paris.jpg',
      explore: 'https://en.wikipedia.org/wiki/Paris'
    },
    {
      name: 'Sydney',
      description: 'Explore the stunning harbor and iconic landmarks of Sydney, Australia.',
      imageUrl: 'assets/images/sydney.jpg',
      explore: 'https://en.wikipedia.org/wiki/Sydney'
    },
    {
      name: 'Rio de Janeiro',
      description: 'Discover the beautiful beaches and lively culture of Rio de Janeiro, Brazil.',
      imageUrl: 'assets/images/rio.jpg',
      explore: 'https://en.wikipedia.org/wiki/Rio_de_Janeiro'
    },
    {
      name: 'Dubai',
      description: 'Experience the modern marvels and luxury of Dubai, UAE.',
      imageUrl: 'assets/images/dubai.jpg',
      explore: 'https://en.wikipedia.org/wiki/Dubai'
    },
    {
      name: 'Kyoto',
      description: 'Immerse yourself in the traditional beauty of Kyoto, Japan.',
      imageUrl: 'assets/images/kyoto.jpg',
      explore: 'https://en.wikipedia.org/wiki/Kyoto'
    },
    {
      name: 'London',
      description: 'Explore the historical landmarks and cultural diversity of London, UK.',
      imageUrl: 'assets/images/london.jpg',
      explore: 'https://en.wikipedia.org/wiki/London'
    },
  ];

  constructor() { }

  get filteredDestinations() {
    return this.destinations.filter(destination => {
      return destination.name.toLowerCase().includes(this.searchText.toLowerCase());
    });
  }
}