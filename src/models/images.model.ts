export interface ImagesModel{
    // id, naslov, slika, opis, cena, rezolucija
    id: number,
    naziv: string,
    slika: string,
    opis: string | null,
    cena: number,
    rezolucija: string
}