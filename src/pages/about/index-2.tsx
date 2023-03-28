import { PublicLayout } from '@/layouts/public-layout';
import Image from 'next/image';
import React, { ReactElement } from 'react';

const AboutPage = () => {
  return (
    <main className="">
      <div className="container md:max-w-6xl px-4 md:px-0 mx-auto ">
        <div className="flex flex-col items-center md:flex-row">
          <div className="grid grid-cols-10 w-full relative gap-4 min-h-screen">
            <aside className="col-span-2 flex flex-col top-0 left-3 sticky h-screen">
              <h1 className="text-2xl font-bold underline">Hello world!</h1>
            </aside>
            <main className="col-span-8 block">
              <div>
                <Image
                  className="`${styles.logo}` fill-white"
                  src="/next.svg"
                  alt="Next.js Logo"
                  width={180}
                  height={37}
                  priority
                />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Adipiscing tristique risus nec feugiat
                in fermentum posuere urna nec. Morbi leo urna molestie at elementum eu facilisis. Id
                venenatis a condimentum vitae sapien pellentesque. Nec nam aliquam sem et tortor
                consequat id porta nibh. At varius vel pharetra vel turpis nunc. Aliquam etiam erat
                velit scelerisque in. Morbi non arcu risus quis varius quam quisque. Eu augue ut
                lectus arcu bibendum at varius vel pharetra. Nunc consequat interdum varius sit amet
                mattis vulputate enim. Elementum eu facilisis sed odio morbi quis commodo. Gravida
                rutrum quisque non tellus orci. Ut morbi tincidunt augue interdum velit euismod in
                pellentesque massa. Posuere urna nec tincidunt praesent semper. Placerat in egestas
                erat imperdiet sed euismod nisi. Tortor condimentum lacinia quis vel eros. Lorem
                dolor sed viverra ipsum nunc. Sit amet mauris commodo quis imperdiet massa tincidunt
                nunc pulvinar. Magna fermentum iaculis eu non diam phasellus vestibulum lorem.
                Pellentesque sit amet porttitor eget dolor. Odio pellentesque diam volutpat commodo
                sed egestas egestas fringilla phasellus. Mattis molestie a iaculis at erat
                pellentesque. Tellus integer feugiat scelerisque varius morbi. Aliquet sagittis id
                consectetur purus ut faucibus pulvinar. Turpis massa tincidunt dui ut. Consequat
                semper viverra nam libero justo laoreet sit. Ultrices neque ornare aenean euismod.
                Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Amet nisl purus in mollis
                nunc sed. Nunc consequat interdum varius sit amet mattis vulputate. Ultrices in
                iaculis nunc sed augue lacus viverra vitae congue. Vestibulum lectus mauris ultrices
                eros. Proin nibh nisl condimentum id venenatis a condimentum vitae. At tempor
                commodo ullamcorper a lacus vestibulum sed arcu non. Tristique risus nec feugiat in
                fermentum posuere. Et ultrices neque ornare aenean euismod elementum. Sem integer
                vitae justo eget. Orci sagittis eu volutpat odio facilisis. Tortor vitae purus
                faucibus ornare suspendisse sed nisi lacus sed. Fusce id velit ut tortor pretium
                viverra suspendisse. Vel orci porta non pulvinar. Non enim praesent elementum
                facilisis leo.
              </p>
              <p className="hidden">
                A iaculis at erat pellentesque adipiscing commodo. Condimentum lacinia quis vel eros
                donec ac. Penatibus et magnis dis parturient montes nascetur ridiculus. Turpis
                egestas sed tempus urna. Velit dignissim sodales ut eu sem. Habitasse platea
                dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Facilisi nullam
                vehicula ipsum a arcu. Morbi tempus iaculis urna id volutpat lacus. Ultrices mi
                tempus imperdiet nulla malesuada pellentesque elit eget gravida. Aliquam nulla
                facilisi cras fermentum odio. Sed cras ornare arcu dui. Tincidunt augue interdum
                velit euismod in. Vitae semper quis lectus nulla at volutpat diam ut. Cursus metus
                aliquam eleifend mi in nulla posuere. Sagittis aliquam malesuada bibendum arcu vitae
                elementum curabitur vitae. Amet dictum sit amet justo donec. Faucibus pulvinar
                elementum integer enim neque volutpat ac. Sollicitudin aliquam ultrices sagittis
                orci. Ut venenatis tellus in metus vulputate eu. Non sodales neque sodales ut etiam
                sit amet nisl purus. Mauris augue neque gravida in fermentum et sollicitudin ac.
                Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Molestie nunc
                non blandit massa enim nec dui nunc mattis. Gravida cum sociis natoque penatibus.
                Mauris pharetra et ultrices neque ornare aenean. Vel fringilla est ullamcorper eget
                nulla facilisi etiam. Sed adipiscing diam donec adipiscing tristique risus. Bibendum
                est ultricies integer quis auctor elit sed vulputate. Diam sollicitudin tempor id eu
                nisl nunc mi. Sagittis id consectetur purus ut faucibus pulvinar. Massa eget egestas
                purus viverra. Volutpat ac tincidunt vitae semper. Sed blandit libero volutpat sed
                cras ornare arcu dui. In pellentesque massa placerat duis ultricies lacus sed turpis
                tincidunt. Vulputate odio ut enim blandit. Odio euismod lacinia at quis risus sed
                vulputate odio. Morbi leo urna molestie at. Ornare arcu dui vivamus arcu felis
                bibendum. Lectus vestibulum mattis ullamcorper velit sed ullamcorper. Mi eget mauris
                pharetra et ultrices neque. Feugiat pretium nibh ipsum consequat. Neque vitae tempus
                quam pellentesque nec nam aliquam sem et. Risus quis varius quam quisque. Adipiscing
                bibendum est ultricies integer quis. Justo laoreet sit amet cursus sit amet dictum.
                Tellus in metus vulputate eu scelerisque felis imperdiet proin. Sollicitudin tempor
                id eu nisl nunc mi. Pretium quam vulputate dignissim suspendisse in est ante.
                Curabitur vitae nunc sed velit dignissim sodales ut eu. Tristique et egestas quis
                ipsum suspendisse. Sodales ut eu sem integer vitae justo eget magna fermentum. Sit
                amet mauris commodo quis imperdiet. Enim diam vulputate ut pharetra. Accumsan sit
                amet nulla facilisi morbi. Rutrum tellus pellentesque eu tincidunt tortor. Id diam
                vel quam elementum. Imperdiet sed euismod nisi porta lorem mollis aliquam ut. Turpis
                massa tincidunt dui ut ornare lectus sit amet. Felis imperdiet proin fermentum leo.
                Cras tincidunt lobortis feugiat vivamus at augue eget arcu. Praesent elementum
                facilisis leo vel fringilla est ullamcorper eget nulla. Ante in nibh mauris cursus
                mattis. Pretium fusce id velit ut tortor. Vel turpis nunc eget lorem. Porta lorem
                mollis aliquam ut. Quis blandit turpis cursus in hac habitasse platea dictumst
                quisque. Felis eget nunc lobortis mattis aliquam faucibus purus in. Egestas sed
                tempus urna et pharetra pharetra massa massa. Scelerisque mauris pellentesque
                pulvinar pellentesque habitant morbi tristique senectus. Dolor sit amet consectetur
                adipiscing. Nunc pulvinar sapien et ligula ullamcorper. Id consectetur purus ut
                faucibus pulvinar elementum integer enim neque. Tellus pellentesque eu tincidunt
                tortor aliquam nulla facilisi. Facilisis magna etiam tempor orci eu. Vulputate odio
                ut enim blandit volutpat maecenas volutpat blandit. Tincidunt tortor aliquam nulla
                facilisi cras fermentum odio. Pulvinar pellentesque habitant morbi tristique
                senectus et netus. Quisque sagittis purus sit amet volutpat consequat mauris nunc.
                Sed nisi lacus sed viverra tellus in hac habitasse platea. Vitae turpis massa sed
                elementum tempus. Amet tellus cras adipiscing enim. Feugiat pretium nibh ipsum
                consequat nisl vel pretium lectus quam. Et egestas quis ipsum suspendisse. Sapien
                pellentesque habitant morbi tristique. Euismod nisi porta lorem mollis aliquam ut
                porttitor leo. Mauris cursus mattis molestie a iaculis at erat. Tristique risus nec
                feugiat in. Enim diam vulputate ut pharetra sit amet aliquam id. Laoreet suspendisse
                interdum consectetur libero id. Arcu non odio euismod lacinia at quis risus. Pretium
                lectus quam id leo in vitae turpis. Aliquam malesuada bibendum arcu vitae. Aliquet
                enim tortor at auctor urna nunc id cursus metus. Arcu felis bibendum ut tristique et
                egestas. Accumsan tortor posuere ac ut consequat semper. Rhoncus dolor purus non
                enim praesent elementum facilisis leo. Id porta nibh venenatis cras sed felis eget
                velit. Massa sed elementum tempus egestas sed. Eget velit aliquet sagittis id
                consectetur purus ut faucibus. Integer vitae justo eget magna fermentum iaculis eu.
                Venenatis cras sed felis eget velit aliquet. Consectetur adipiscing elit duis
                tristique sollicitudin nibh sit. Mauris pellentesque pulvinar pellentesque habitant
                morbi tristique. Est ultricies integer quis auctor elit sed vulputate mi. Auctor
                urna nunc id cursus metus aliquam eleifend. Donec ac odio tempor orci dapibus
                ultrices in iaculis. Condimentum mattis pellentesque id nibh tortor id. Lorem ipsum
                dolor sit amet consectetur adipiscing. Vel pharetra vel turpis nunc eget lorem dolor
                sed viverra. Ornare massa eget egestas purus viverra accumsan in nisl nisi.
                Porttitor eget dolor morbi non arcu. Rhoncus est pellentesque elit ullamcorper.
                Ultricies integer quis auctor elit sed vulputate mi. Nunc mi ipsum faucibus vitae
                aliquet nec ullamcorper sit amet. Scelerisque eu ultrices vitae auctor eu augue ut.
                Viverra adipiscing at in tellus. Gravida neque convallis a cras semper auctor. Dui
                vivamus arcu felis bibendum ut tristique. Elementum nibh tellus molestie nunc non
                blandit massa. Fermentum iaculis eu non diam phasellus vestibulum. Purus faucibus
                ornare suspendisse sed nisi. Elementum eu facilisis sed odio morbi quis commodo
                odio. Purus semper eget duis at tellus at. Justo nec ultrices dui sapien eget mi
                proin. Amet aliquam id diam maecenas. Proin fermentum leo vel orci porta non
                pulvinar. Urna condimentum mattis pellentesque id nibh tortor. Pharetra sit amet
                aliquam id diam maecenas ultricies mi eget. Cras ornare arcu dui vivamus arcu. Eget
                dolor morbi non arcu risus quis varius. Rhoncus est pellentesque elit ullamcorper
                dignissim cras. Quam nulla porttitor massa id. Mi bibendum neque egestas congue
                quisque. Eu facilisis sed odio morbi quis commodo. Amet commodo nulla facilisi
                nullam vehicula. Penatibus et magnis dis parturient montes. Sed risus ultricies
                tristique nulla aliquet enim. Est ullamcorper eget nulla facilisi etiam dignissim
                diam. Sit amet cursus sit amet dictum sit amet justo. Maecenas accumsan lacus vel
                facilisis volutpat. Neque egestas congue quisque egestas. Enim nulla aliquet
                porttitor lacus luctus. Risus nec feugiat in fermentum posuere urna. Nulla malesuada
                pellentesque elit eget gravida cum. Sit amet est placerat in egestas erat imperdiet.
                Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Ultrices in iaculis
                nunc sed augue lacus viverra. Sed velit dignissim sodales ut eu sem integer vitae
                justo. Posuere ac ut consequat semper. Parturient montes nascetur ridiculus mus
                mauris vitae ultricies. Placerat duis ultricies lacus sed. Iaculis at erat
                pellentesque adipiscing. Lobortis scelerisque fermentum dui faucibus. Vitae congue
                mauris rhoncus aenean vel. Dictum sit amet justo donec. Pulvinar neque laoreet
                suspendisse interdum consectetur libero. Non consectetur a erat nam. Et sollicitudin
                ac orci phasellus egestas tellus rutrum. Faucibus in ornare quam viverra orci
                sagittis. Neque egestas congue quisque egestas diam in. Risus at ultrices mi tempus
                imperdiet nulla malesuada pellentesque elit. Pharetra vel turpis nunc eget lorem
                dolor sed viverra ipsum. Ante in nibh mauris cursus mattis molestie a. Justo nec
                ultrices dui sapien eget. Aliquam ultrices sagittis orci a scelerisque. Condimentum
                mattis pellentesque id nibh tortor. Dui ut ornare lectus sit amet est placerat in.
                Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Sed sed risus pretium quam
                vulputate dignissim. Orci ac auctor augue mauris augue neque. Pellentesque pulvinar
                pellentesque habitant morbi tristique senectus et netus. Commodo odio aenean sed
                adipiscing. Condimentum id venenatis a condimentum vitae sapien. Pellentesque
                habitant morbi tristique senectus et netus et. Quis hendrerit dolor magna eget est
                lorem ipsum dolor. Ac turpis egestas sed tempus urna. Ut lectus arcu bibendum at
                varius vel pharetra. Turpis tincidunt id aliquet risus. Etiam erat velit scelerisque
                in dictum non consectetur a erat. Phasellus faucibus scelerisque eleifend donec
                pretium vulputate sapien nec sagittis. Massa eget egestas purus viverra accumsan in
                nisl nisi. Augue neque gravida in fermentum et sollicitudin. Nunc congue nisi vitae
                suscipit. Cras sed felis eget velit aliquet. Elementum eu facilisis sed odio morbi
                quis commodo odio aenean. In nulla posuere sollicitudin aliquam ultrices. Nibh nisl
                condimentum id venenatis a condimentum vitae. Sem fringilla ut morbi tincidunt augue
                interdum velit euismod in. Vitae congue mauris rhoncus aenean vel elit scelerisque
                mauris. Morbi quis commodo odio aenean. In ornare quam viverra orci sagittis. Nulla
                malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Fusce id
                velit ut tortor pretium. Sollicitudin aliquam ultrices sagittis orci a scelerisque
                purus semper. Lectus sit amet est placerat. Tellus at urna condimentum mattis
                pellentesque id nibh tortor. Nisl rhoncus mattis rhoncus urna neque viverra. Dictum
                non consectetur a erat nam at. Libero volutpat sed cras ornare arcu dui. Egestas
                congue quisque egestas diam in. Vel pharetra vel turpis nunc eget lorem. Aenean vel
                elit scelerisque mauris pellentesque. Luctus accumsan tortor posuere ac ut consequat
                semper viverra nam. Ullamcorper malesuada proin libero nunc consequat. Magna sit
                amet purus gravida quis blandit turpis. Commodo quis imperdiet massa tincidunt nunc.
                Et egestas quis ipsum suspendisse ultrices. Interdum velit euismod in pellentesque.
                Proin nibh nisl condimentum id venenatis. Rhoncus aenean vel elit scelerisque.
                Viverra accumsan in nisl nisi. Feugiat in fermentum posuere urna nec. Tincidunt
                lobortis feugiat vivamus at augue eget arcu dictum varius. Enim sed faucibus turpis
                in eu. Sem nulla pharetra diam sit. In dictum non consectetur a erat nam. Arcu dui
                vivamus arcu felis bibendum ut tristique et. Vulputate sapien nec sagittis aliquam
                malesuada bibendum. Senectus et netus et malesuada fames ac turpis. Nullam vehicula
                ipsum a arcu. Amet nisl suscipit adipiscing bibendum. Viverra aliquet eget sit amet
                tellus cras adipiscing. In nisl nisi scelerisque eu. Arcu dictum varius duis at.
                Mauris nunc congue nisi vitae suscipit. Dui ut ornare lectus sit amet est. Dui nunc
                mattis enim ut tellus. Eget nulla facilisi etiam dignissim diam. Sed cras ornare
                arcu dui vivamus arcu felis bibendum ut. Dui faucibus in ornare quam viverra orci.
                Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Vulputate mi sit amet
                mauris commodo quis. Bibendum enim facilisis gravida neque convallis a. Lectus nulla
                at volutpat diam ut venenatis tellus in metus. Convallis aenean et tortor at risus
                viverra adipiscing at. Sed augue lacus viverra vitae congue. Sollicitudin aliquam
                ultrices sagittis orci a scelerisque. Blandit aliquam etiam erat velit scelerisque
                in dictum. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. At
                in tellus integer feugiat scelerisque varius. Adipiscing bibendum est ultricies
                integer quis. Turpis egestas maecenas pharetra convallis posuere morbi. Risus quis
                varius quam quisque id diam vel quam. Enim nunc faucibus a pellentesque sit.
                Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Magna sit
                amet purus gravida quis blandit. Scelerisque felis imperdiet proin fermentum leo.
                Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Orci nulla
                pellentesque dignissim enim sit amet. Mi sit amet mauris commodo. Nibh tortor id
                aliquet lectus proin. Elementum pulvinar etiam non quam lacus suspendisse faucibus
                interdum. Imperdiet massa tincidunt nunc pulvinar sapien. Dignissim convallis aenean
                et tortor. Erat velit scelerisque in dictum non consectetur a. Leo in vitae turpis
                massa sed elementum tempus egestas sed. Ultricies mi eget mauris pharetra.
                Parturient montes nascetur ridiculus mus mauris. Praesent tristique magna sit amet
                purus gravida. Hendrerit dolor magna eget est lorem ipsum dolor sit. Elementum
                sagittis vitae et leo duis ut diam quam nulla. Tempus quam pellentesque nec nam
                aliquam sem et tortor consequat. Laoreet sit amet cursus sit amet. Sagittis purus
                sit amet volutpat consequat mauris nunc congue nisi. Nam libero justo laoreet sit
                amet cursus sit amet. Nec dui nunc mattis enim ut. Ultrices mi tempus imperdiet
                nulla malesuada pellentesque elit eget gravida. Praesent elementum facilisis leo vel
                fringilla est ullamcorper eget. Auctor elit sed vulputate mi sit amet. Vulputate
                dignissim suspendisse in est ante. In nibh mauris cursus mattis molestie. Non diam
                phasellus vestibulum lorem. Leo vel orci porta non pulvinar neque laoreet
                suspendisse interdum. Diam maecenas sed enim ut sem viverra aliquet eget sit. Arcu
                dictum varius duis at consectetur lorem donec massa. Tellus cras adipiscing enim eu
                turpis egestas pretium. Vel eros donec ac odio tempor orci dapibus. Metus dictum at
                tempor commodo ullamcorper. Id cursus metus aliquam eleifend mi in nulla posuere
                sollicitudin. Amet nisl suscipit adipiscing bibendum est ultricies integer quis.
                Erat nam at lectus urna duis convallis convallis. Elit at imperdiet dui accumsan.
                Sapien nec sagittis aliquam malesuada. Cum sociis natoque penatibus et magnis dis.
                Nunc id cursus metus aliquam eleifend mi. Facilisi etiam dignissim diam quis enim
                lobortis scelerisque. Sed adipiscing diam donec adipiscing. Massa id neque aliquam
                vestibulum morbi. Vitae justo eget magna fermentum iaculis eu non diam phasellus.
                Lobortis feugiat vivamus at augue eget arcu dictum varius. Quis risus sed vulputate
                odio ut enim blandit. Rhoncus aenean vel elit scelerisque mauris pellentesque. Nisi
                porta lorem mollis aliquam ut. Purus faucibus ornare suspendisse sed nisi lacus sed.
                Interdum posuere lorem ipsum dolor sit. Quis imperdiet massa tincidunt nunc pulvinar
                sapien et ligula ullamcorper. Ac felis donec et odio pellentesque diam volutpat
                commodo. Proin sed libero enim sed. Mattis pellentesque id nibh tortor. Urna nunc id
                cursus metus aliquam eleifend. Lacinia at quis risus sed vulputate odio ut enim
                blandit. Amet cursus sit amet dictum. Eget nulla facilisi etiam dignissim diam quis
                enim. Quam nulla porttitor massa id neque aliquam vestibulum. Non consectetur a erat
                nam at lectus urna. Dolor purus non enim praesent elementum facilisis leo vel. Ac
                tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Egestas dui id ornare
                arcu odio ut sem nulla. Urna cursus eget nunc scelerisque. Erat pellentesque
                adipiscing commodo elit at. Pharetra diam sit amet nisl. Vestibulum rhoncus est
                pellentesque elit ullamcorper dignissim. Massa tempor nec feugiat nisl pretium fusce
                id velit ut. Quisque id diam vel quam. Lectus urna duis convallis convallis tellus.
                Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Lectus
                sit amet est placerat in egestas. Aliquam id diam maecenas ultricies mi eget mauris.
                Felis eget nunc lobortis mattis. Ullamcorper morbi tincidunt ornare massa eget
                egestas. Libero volutpat sed cras ornare. Elementum integer enim neque volutpat ac
                tincidunt vitae semper. Vivamus at augue eget arcu dictum varius duis at. Senectus
                et netus et malesuada fames ac turpis egestas. Dui vivamus arcu felis bibendum ut.
                Est ultricies integer quis auctor elit sed vulputate mi sit. In est ante in nibh
                mauris cursus mattis molestie a. Turpis egestas sed tempus urna et. Ut ornare lectus
                sit amet est placerat in. Nullam vehicula ipsum a arcu cursus vitae congue mauris
                rhoncus. Dolor morbi non arcu risus. Venenatis lectus magna fringilla urna porttitor
                rhoncus dolor purus. Vitae suscipit tellus mauris a. Scelerisque in dictum non
                consectetur a erat nam at. Velit ut tortor pretium viverra suspendisse potenti.
                Morbi tincidunt augue interdum velit. Fermentum iaculis eu non diam phasellus.
                Scelerisque varius morbi enim nunc faucibus a pellentesque sit amet. Tristique
                senectus et netus et malesuada fames.
              </p>
            </main>
          </div>
        </div>
      </div>
    </main>
  );
};
AboutPage.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};
// AboutPage.theme = 'dark';

export default AboutPage;
