import { FC } from 'react';

interface SidebarProps {
  factions: { name: string; description: string }[];
  onFactionSelect: (factionName: string) => void;
}

const Sidebar: FC<SidebarProps> = ({ factions, onFactionSelect }) => {
  return (
    <div className="sidebar">
      <h2 className="text-lg font-bold">Factions</h2>
      <ul>
        {factions.map((faction) => (
          <li key={faction.name} onClick={() => onFactionSelect(faction.name)} className="cursor-pointer">
            {faction.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
