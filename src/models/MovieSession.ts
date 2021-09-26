interface Types {
  id: number;
  alias: string;
}

interface Session {
  id: string;
  types: Types[];
  time: string;
}

interface Room {
  name: string;
  sessions: Session[];
}

export interface MovieSession {
  id: string;
  name: string;
  rooms: Room[];
}
