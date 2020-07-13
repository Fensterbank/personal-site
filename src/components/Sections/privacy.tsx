import { FC } from 'react';

import { SectionProps } from '.';
import { Footer } from '../Footer';
import { VerticalGridLines } from '../VericalGridLines';

const Privacy: FC<SectionProps> = () => (
  <section
    data-anchor="home"
    className="section bg-no-repeat bg-cover bg-center section-impress-privacy h-full w-full"
  >
    <VerticalGridLines />
    <div className="flex h-full w-full flex-col">
      <div className="grid grid-cols-24 relative z-10 mb-20 flex-grow flex-shrink overflow-y-scroll">
        <div className="hidden md:block col-span-8" />
        <div className="col-span-24 px-4 md:col-span-12 md:px-0 md:pl-2">
          <h2 className="text-green-fbit text-2xl md:text-3xl lg:text-6xl mb-6 mt-6 font-bold">
            Datenschutzerklärung
          </h2>
          <div className="text-white">
            <h2 className="mb-4 font-bold text-xl">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="mb-2 font-bold text-lg">Allgemeine Hinweise</h3>
            <p className="text-md mb-6">
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können. Ausführliche
              Informationen zum Thema Datenschutz entnehmen Sie unserer unter
              diesem Text aufgeführten Datenschutzerklärung.
            </p>
            <h3 className="mb-2 font-bold text-lg">
              Datenerfassung auf unserer Website
            </h3>
            <p className="text-md font-bold mb-2">
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?
            </p>
            <p className="text-md mb-6">
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
              dieser Website entnehmen.
            </p>
            <p className="text-md font-bold mb-2">
              Wie erfassen wir Ihre Daten?
            </p>
            <p className="text-md mb-6">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
              mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in
              ein Kontaktformular eingeben.
            </p>
            <p className="text-md mb-6">
              Andere Daten werden automatisch beim Besuch der Website durch
              unsere IT-Systeme erfasst. Das sind vor allem technische Daten
              (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des
              Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch,
              sobald Sie unsere Website betreten.
            </p>
            <p className="text-md font-bold mb-2">
              Wofür nutzen wir Ihre Daten?
            </p>
            <p className="text-md mb-6">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie
              Bereitstellung der Website zu gewährleisten. Andere Daten können
              zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>
            <p className="text-md font-bold mb-2">
              Welche Rechte haben Sie bezüglich Ihrer Daten?
            </p>
            <p className="text-md mb-6">
              Sie haben jederzeit das Recht unentgeltlich Auskunft über
              Herkunft, Empfänger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht,
              die Berichtigung, Sperrung oder Löschung dieser Daten zu
              verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz
              können Sie sich jederzeit unter der im Impressum angegebenen
              Adresse an uns wenden. Des Weiteren steht Ihnen ein
              Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
            <h3 className="mb-2 font-bold text-lg">
              Analyse-Tools und Tools von Drittanbietern
            </h3>
            <p className="text-md mb-6">
              Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch
              ausgewertet werden. Das geschieht vor allem mit Cookies und mit
              sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens
              erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu
              Ihnen zurückverfolgt werden. Sie können dieser Analyse
              widersprechen oder sie durch die Nichtbenutzung bestimmter Tools
              verhindern. Detaillierte Informationen dazu finden Sie in der
              folgenden Datenschutzerklärung.
            </p>
            <p className="text-md mb-6">
              Sie können dieser Analyse widersprechen. Über die
              Widerspruchsmöglichkeiten werden wir Sie in dieser
              Datenschutzerklärung informieren.
            </p>
            <h2 className="mb-4 font-bold text-xl">
              2. Allgemeine Hinweise und Pflichtinformationen
            </h2>
            <h3 className="mb-2 font-bold text-lg">Datenschutz</h3>
            <p className="text-md mb-6">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
              Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
              vertraulich und entsprechend der gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="text-md mb-6">
              Wenn Sie diese Website benutzen, werden verschiedene
              personenbezogene Daten erhoben. Personenbezogene Daten sind Daten,
              mit denen Sie persönlich identifiziert werden können. Die
              vorliegende Datenschutzerklärung erläutert, welche Daten wir
              erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu
              welchem Zweck das geschieht.
            </p>
            <p className="text-md mb-6">
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B.
              bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen
              kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch
              Dritte ist nicht möglich.
            </p>
            <h3 className="mb-2 font-bold text-lg">
              Hinweis zur verantwortlichen Stelle
            </h3>
            <p className="text-md mb-6">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser
              Website ist:
            </p>
            <p className="text-md mb-6">
              Frédéric Bolvin
              <br />
              Öschweg 15
              <br />
              72555 Metzingen
            </p>
            <p className="text-md mb-6">
              Telefon: 0176-24472011
              <br />
              E-Mail: fred@f-bit.software
            </p>
            <p className="text-md mb-6">
              Verantwortliche Stelle ist die natürliche oder juristische Person,
              die allein oder gemeinsam mit anderen über die Zwecke und Mittel
              der Verarbeitung von personenbezogenen Daten (z.B. Namen,
              E-Mail-Adressen o. Ä.) entscheidet.
            </p>
            <h3 className="mb-2 font-bold text-lg">
              Widerruf Ihrer Einwilligung zur Datenverarbeitung
            </h3>
            <p className="text-md mb-6">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
              Einwilligung möglich. Sie können eine bereits erteilte
              Einwilligung jederzeit widerrufen. Dazu reicht eine formlose
              Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum
              Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
              unberührt.
            </p>
            <h3 className="mb-2 font-bold text-lg">
              Beschwerderecht bei der zuständigen Aufsichtsbehörde
            </h3>
            <p className="text-md mb-6">
              Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein
              Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              Zuständige Aufsichtsbehörde in datenschutzrechtlichen Fragen ist
              der Landesdatenschutzbeauftragte des Bundeslandes, in dem unser
              Unternehmen seinen Sitz hat. Eine Liste der
              Datenschutzbeauftragten sowie deren Kontaktdaten können folgendem
              Link entnommen werden:
              <br />
              <a
                href="https://www.bfdi.bund.de/SharedDocs/Adressen/LfD/BadenWuerttemberg.html"
                target="_blank"
                rel="noreferrer"
              >
                Landesdatenschutzbeauftragte Baden-Württemberg
              </a>
            </p>
            <h3 className="mb-2 font-bold text-lg">
              Recht auf Datenübertragbarkeit
            </h3>
            <p className="text-md mb-6">
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
              Einwilligung oder in Erfüllung eines Vertrags automatisiert
              verarbeiten, an sich oder an einen Dritten in einem gängigen,
              maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die
              direkte Übertragung der Daten an einen anderen Verantwortlichen
              verlangen, erfolgt dies nur, soweit es technisch machbar ist.
            </p>
            <h3 className="mb-2 font-bold text-lg">
              SSL- bzw. TLS-Verschlüsselung
            </h3>
            <p className="text-md mb-6">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen
              oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine
              SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung
              erkennen Sie daran, dass die Adresszeile des Browsers von
              “http://” auf “https://” wechselt und an dem Schloss-Symbol in
              Ihrer Browserzeile.
            </p>
            <p className="text-md mb-6">
              Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die
              Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen
              werden.
            </p>
            <h3 className="mb-2 font-bold text-lg">
              Auskunft, Sperrung, Löschung
            </h3>
            <p className="text-md mb-6">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
              jederzeit das Recht auf unentgeltliche Auskunft über Ihre
              gespeicherten personenbezogenen Daten, deren Herkunft und
              Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht
              auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu
              sowie zu weiteren Fragen zum Thema personenbezogene Daten können
              Sie sich jederzeit unter der im Impressum angegebenen Adresse an
              uns wenden.
            </p>
            <h2 className="mb-4 font-bold text-xl">
              3. Datenerfassung auf unserer Website
            </h2>
            <h3 className="mb-2 font-bold text-lg">Server-Log-Dateien</h3>
            <p className="text-md mb-6">
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in so genannten Server-Log-Dateien, die Ihr Browser
              automatisch an uns übermittelt. Dies sind:
            </p>
            <ul>
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="text-md mb-6">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
              nicht vorgenommen.
            </p>
            <p className="text-md mb-6">
              Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
              lit. f DSGVO. Der Webseitenbetreiber hat ein berechtigtes
              Interesse an der technisch fehlerfreien Darstellung und der
              Optimierung seiner Webseite – hierzu müssen die Server-Log-Files
              erfasst werden.
            </p>
            <h2 className="mb-4 font-bold text-xl">
              4. Analyse Tools und Werbung
            </h2>
            <h3 className="mb-2 font-bold text-lg">Matomo (ehemals Piwik)</h3>
            <p className="text-md mb-6">
              Diese Website benutzt den Open Source Webanalysedienst Matomo.
              Matomo verwendet so genannte "Cookies". Das sind Textdateien, die
              auf Ihrem Computer gespeichert werden und die eine Analyse der
              Benutzung der Website durch Sie ermöglichen. Dazu werden die durch
              den Cookie erzeugten Informationen über die Benutzung dieser
              Website auf unserem Server gespeichert. Die IP-Adresse wird vor
              der Speicherung anonymisiert.
            </p>
            <p className="text-md mb-6">
              Matomo-Cookies verbleiben auf Ihrem Endgerät, bis Sie sie löschen.
            </p>
            <p className="text-md mb-6">
              Die Speicherung von Matomo-Cookies erfolgt auf Grundlage von Art.
              6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
              Interesse an der anonymisierten Analyse des Nutzerverhaltens, um
              sowohl sein Webangebot als auch seine Werbung zu optimieren.
            </p>
            <p className="text-md mb-6">
              Die durch den Cookie erzeugten Informationen über die Benutzung
              dieser Website werden nicht an Dritte weitergegeben. Sie können
              die Speicherung der Cookies durch eine entsprechende Einstellung
              Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf
              hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche
              Funktionen dieser Website vollumfänglich werden nutzen können.
            </p>
            <p className="text-md mb-6">
              Wenn Sie mit der Speicherung und Nutzung Ihrer Daten nicht
              einverstanden sind, können Sie die Speicherung und Nutzung hier
              deaktivieren. In diesem Fall wird in Ihrem Browser ein
              Opt-Out-Cookie hinterlegt, der verhindert, dass Matomo
              Nutzungsdaten speichert. Wenn Sie Ihre Cookies löschen, hat dies
              zur Folge, dass auch das Matomo Opt-Out-Cookie gelöscht wird. Das
              Opt-Out muss bei einem erneuten Besuch unserer Seite wieder
              aktiviert werden.
            </p>
            <p className="text-md mb-6">
              <em>
                <iframe
                  title="Opt Out from Analytics"
                  style={{
                    border: 0,
                    width: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                  }}
                  src="https://analytics.bol.vin/index.php?module=CoreAdminHome&action=optOut&language=de&backgroundColor=&fontColor=a1a1a1&fontSize=0.8em&fontFamily='Work Sans', sans-serif"
                />
              </em>
            </p>
          </div>
        </div>
      </div>
      <Footer fixed />
    </div>
  </section>
);
export default Privacy;
