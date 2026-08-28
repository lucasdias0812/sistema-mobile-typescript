import { StatusConsulta, Especialidade } from "../types";
import { ClassificacaoPA } from "../types/pressaoArterial";

export interface Consulta {
 id: number;
 pacienteId: number;
 pacienteNome: string;
 medicoId: number;
 medicoNome: string;
 especialidade: Especialidade;
 usuarioId: number; 
 data: string;
 horario: string;
 status: StatusConsulta;
 observacoes?: string;
 valor?: number;
 prioridade?: boolean;
 emergencia?: boolean;
 pressaoSistolica?: number;
 pressaoDiastolica?: number;
 classificacaoPA?: ClassificacaoPA;
}
