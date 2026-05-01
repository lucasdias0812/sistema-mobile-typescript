import { Medico } from "./medico";
import { Paciente } from "../types/paciente";
import { StatusConsulta } from "../types/statusConsulta";
import { Especialidade } from "../types/especialidade";
export interface Consulta {
  id: number;
  medico: Medico;
  paciente: Paciente;
  especialidade: Especialidade;
  usuarioId: number;
  data: string;
  valor: number;
  status: StatusConsulta;
  observacoes?: string;
}