import ezinventory from 'images/EZInventory.jpg';
import dungeonraider from 'images/DungeonRaider.jpg';
import galaxyconquest from 'images/GalaxyConquest.jpg';
// image can be any size. just make sure it is close to a 1:1 ratio - a square.

export default [
  {
    title: 'EZ Inventory',
    description:
      'Easily query info about remote computers including serial numbers, asset tags, monitors, and devices using WMI/CIM and Remote Registry. Also capable of exporting to a .CSV file',
    skills: ['WPF','C#','XML','.Net Core'],
    image: ezinventory,
    links: {
      github: 'https://github.com/alexm327/ezinventory',
    },
  },
  {
    title: 'Dungeon Raider',
    description:
      'This project is based off the (now discontinued and unplayable) iOS game <a href="https://apps.apple.com/us/app/dungeon-raid/id403090531">Dungeon Raid</a>. Right now it is still in a basic state but as time goes on I am working on implementing new features',
    skills: ['Unity', 'C#'],
    image: dungeonraider,
    links: {
      github: 'https://github.com/alexm327/dungeonraider',
    },
  },
  {
    title: 'GalaxyConquest',
    description:
      'A short Unity game inspired by games like Contra and Metal Slug. Developed as part of a team with myself as the main programmer',
    skills: ['Unity', 'C#'],
    image: galaxyconquest,
    links: {
      github: 'https://github.com/alexm327/galaxyconquest',
    },
  }
];
