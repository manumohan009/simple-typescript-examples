/// <reference types="@types/google.maps" />

// import { Company } from './Company';
// import { User } from './User';

// Instruction to every other class on how they can be an argument to addMarker
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string; 
  color: string
}

export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(divId: string = 'map') {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: { lat: 0, lng: 0 },
      }
    );
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener('click', () => {
        const infoWindow = new google.maps.InfoWindow({
            content: `${mappable.markerContent()} <h4>Lat: ${mappable.location.lat}, Lng: ${mappable.location.lng}</h4>`,
        });
        infoWindow.open(this.googleMap, marker);
    })
  }

  //   addUserMarker(user: User): void {
  //     new google.maps.Marker({
  //       map: this.googleMap,
  //       position: {
  //         lat: user.location.lat,
  //         lng: user.location.lng,
  //       },
  //     });
  //   }

  //   addCompanyMarker(company: Company): void {
  //     new google.maps.Marker({
  //       map: this.googleMap,
  //       position: {
  //         lat: company.location.lat,
  //         lng: company.location.lng,
  //       },
  //       label: {
  //         text: company.companyName,
  //         color: 'blue',
  //       },
  //     });
  //   }

  //   addMarker(marker: User | Company): void {
  //     if (marker instanceof User) {
  //       this.addUserMarker(marker);
  //     } else if (marker instanceof Company) {
  //       this.addCompanyMarker(marker);
  //     }
  //   }

  //   addMarker(mappable: User | Company): void {
  //     new google.maps.Marker({
  //       map: this.googleMap,
  //       position: {
  //         lat: mappable.location.lat,
  //         lng: mappable.location.lng,
  //       },
  //     });
  //   }
}
