create TABLE partidas(
	idpartida integer not null primary key  autoincrement,
	dt_partida timestamp,
	gol_mandante integer not null,
	gol_visitante integer not null,
	id_equipe_mandante integer not null,
	id_equipe_visitante integer not null,
	foreign key (id_equipe_mandante) references equipe(idequipe),
	foreign key (id_equipe_visitante) references equipe(idequipe)
);