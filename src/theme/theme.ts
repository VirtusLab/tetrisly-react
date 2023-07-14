import { th } from "@xstyled/styled-components";

import { Theme } from "./Theme.interface";

export const theme: Theme = {
  colors: {
    "$g-color-coolGrey--4": "hsla(208, 24%, 14%, 1)",
    "$g-color-coolGrey--3": "hsla(208, 15%, 18%, 1)",
    "$g-color-coolGrey--2": "hsla(210, 12%, 26%, 1)",
    "$g-color-coolGrey--1": "hsla(210, 12%, 33%, 1)",
    "$g-color-coolGrey-0": "hsla(215, 12%, 38%, 1)",
    "$g-color-coolGrey-+1": "hsla(211, 12%, 55%, 1)",
    "$g-color-coolGrey-+2": "hsla(211, 12%, 66%, 1)",
    "$g-color-coolGrey-+3": "hsla(210, 17%, 84%, 1)",
    "$g-color-coolGrey-+4": "hsla(207, 16%, 89%, 1)",
    "$g-color-coolGrey-+5": "hsla(210, 16%, 93%, 1)",
    "$g-color-coolGrey-+6": "hsla(204, 20%, 95%, 1)",
    "$g-color-coolGrey-+7": "hsla(210, 25%, 97%, 1)",
    "$g-color-coolGrey-+8": "hsla(210, 33%, 99%, 1)",
    "$g-color-coolGreyA--4": "hsla(207, 47%, 7%, 0.93)",
    "$g-color-coolGreyA--3": "hsla(208, 43%, 7%, 0.88)",
    "$g-color-coolGreyA--2": "hsla(212, 27%, 14%, 0.86)",
    "$g-color-coolGreyA--1": "hsla(211, 30%, 16%, 0.8)",
    "$g-color-coolGreyA-0": "hsla(215, 40%, 16%, 0.74)",
    "$g-color-coolGreyA-+1": "hsla(210, 50%, 19%, 0.56)",
    "$g-color-coolGreyA-+2": "hsla(211, 66%, 15%, 0.4)",
    "$g-color-coolGreyA-+3": "hsla(212, 68%, 20%, 0.2)",
    "$g-color-coolGreyA-+4": "hsla(205, 89%, 14%, 0.13)",
    "$g-color-coolGreyA-+5": "hsla(214, 64%, 17%, 0.09)",
    "$g-color-coolGreyA-+6": "hsla(206, 95%, 16%, 0.06)",
    "$g-color-coolGreyA-+7": "hsla(213, 100%, 18%, 0.04)",
    "$g-color-coolGreyA-+8": "hsla(216, 67%, 37%, 0.02)",
    "$g-color-neutralGrey--4": "hsla(0, 0%, 13%, 1)",
    "$g-color-neutralGrey--3": "hsla(0, 0%, 18%, 1)",
    "$g-color-neutralGrey--2": "hsla(0, 0%, 25%, 1)",
    "$g-color-neutralGrey--1": "hsla(0, 0%, 32%, 1)",
    "$g-color-neutralGrey-0": "hsla(0, 0%, 37%, 1)",
    "$g-color-neutralGrey-+1": "hsla(0, 0%, 54%, 1)",
    "$g-color-neutralGrey-+2": "hsla(0, 0%, 65%, 1)",
    "$g-color-neutralGrey-+3": "hsla(0, 0%, 84%, 1)",
    "$g-color-neutralGrey-+4": "hsla(0, 0%, 89%, 1)",
    "$g-color-neutralGrey-+5": "hsla(0, 0%, 92%, 1)",
    "$g-color-neutralGrey-+6": "hsla(0, 0%, 95%, 1)",
    "$g-color-neutralGrey-+7": "hsla(0, 0%, 97%, 1)",
    "$g-color-neutralGrey-+8": "hsla(0, 0%, 99%, 1)",
    "$g-color-neutralGreyA--4": "hsla(0, 0%, 7%, 0.93)",
    "$g-color-neutralGreyA--3": "hsla(0, 0%, 6%, 0.88)",
    "$g-color-neutralGreyA--2": "hsla(0, 0%, 13%, 0.86)",
    "$g-color-neutralGreyA--1": "hsla(0, 0%, 15%, 0.8)",
    "$g-color-neutralGreyA-0": "hsla(240, 1%, 15%, 0.74)",
    "$g-color-neutralGreyA-+1": "hsla(0, 0%, 17%, 0.56)",
    "$g-color-neutralGreyA-+2": "hsla(0, 0%, 13%, 0.4)",
    "$g-color-neutralGreyA-+3": "hsla(0, 0%, 18%, 0.2)",
    "$g-color-neutralGreyA-+4": "hsla(0, 0%, 12%, 0.13)",
    "$g-color-neutralGreyA-+5": "hsla(0, 0%, 11%, 0.09)",
    "$g-color-neutralGreyA-+6": "hsla(0, 0%, 13%, 0.06)",
    "$g-color-neutralGreyA-+7": "hsla(0, 0%, 18%, 0.04)",
    "$g-color-neutralGreyA-+8": "hsla(0, 0%, 32%, 0.02)",
    "$g-color-warmGrey--4": "hsla(60, 4%, 13%, 1)",
    "$g-color-warmGrey--3": "hsla(60, 4%, 18%, 1)",
    "$g-color-warmGrey--2": "hsla(60, 5%, 24%, 1)",
    "$g-color-warmGrey--1": "hsla(60, 4%, 31%, 1)",
    "$g-color-warmGrey-0": "hsla(60, 4%, 36%, 1)",
    "$g-color-warmGrey-+1": "hsla(60, 3%, 53%, 1)",
    "$g-color-warmGrey-+2": "hsla(60, 5%, 64%, 1)",
    "$g-color-warmGrey-+3": "hsla(60, 8%, 84%, 1)",
    "$g-color-warmGrey-+4": "hsla(60, 8%, 89%, 1)",
    "$g-color-warmGrey-+5": "hsla(60, 9%, 91%, 1)",
    "$g-color-warmGrey-+6": "hsla(60, 6%, 95%, 1)",
    "$g-color-warmGrey-+7": "hsla(60, 6%, 97%, 1)",
    "$g-color-warmGrey-+8": "hsla(60, 4%, 99%, 1)",
    "$g-color-warmGreyA--4": "hsla(60, 6%, 7%, 0.93)",
    "$g-color-warmGreyA--3": "hsla(60, 15%, 6%, 0.88)",
    "$g-color-warmGreyA--2": "hsla(60, 12%, 12%, 0.86)",
    "$g-color-warmGreyA--1": "hsla(60, 10%, 14%, 0.8)",
    "$g-color-warmGreyA-0": "hsla(60, 15%, 13%, 0.74)",
    "$g-color-warmGreyA-+1": "hsla(60, 15%, 16%, 0.56)",
    "$g-color-warmGreyA-+2": "hsla(60, 41%, 11%, 0.4)",
    "$g-color-warmGreyA-+3": "hsla(60, 36%, 18%, 0.2)",
    "$g-color-warmGreyA-+4": "hsla(60, 43%, 14%, 0.13)",
    "$g-color-warmGreyA-+5": "hsla(60, 89%, 7%, 0.09)",
    "$g-color-warmGreyA-+6": "hsla(60, 54%, 12%, 0.06)",
    "$g-color-warmGreyA-+7": "hsla(60, 3%, 18%, 0.04)",
    "$g-color-warmGreyA-+8": "hsla(0, 0%, 32%, 0.02)",
    "$g-color-whiteA--12": "hsla(0, 0%, 100%, 0.02)",
    "$g-color-whiteA--11": "hsla(0, 0%, 100%, 0.03)",
    "$g-color-whiteA--10": "hsla(0, 0%, 100%, 0.05)",
    "$g-color-whiteA--9": "hsla(0, 0%, 100%, 0.08)",
    "$g-color-whiteA--8": "hsla(0, 0%, 100%, 0.1)",
    "$g-color-whiteA--7": "hsla(0, 0%, 100%, 0.12)",
    "$g-color-whiteA--6": "hsla(0, 0%, 100%, 0.24)",
    "$g-color-whiteA--5": "hsla(0, 0%, 100%, 0.4)",
    "$g-color-whiteA--4": "hsla(0, 0%, 100%, 0.64)",
    "$g-color-whiteA--3": "hsla(0, 0%, 100%, 0.68)",
    "$g-color-whiteA--2": "hsla(0, 0%, 100%, 0.72)",
    "$g-color-whiteA--1": "hsla(0, 0%, 100%, 0.82)",
    "$g-color-whiteA-0": "hsla(0, 0%, 100%, 1)",
    "$g-color-red--4": "hsla(0, 70%, 17%, 1)",
    "$g-color-red--3": "hsla(0, 55%, 28%, 1)",
    "$g-color-red--2": "hsla(0, 54%, 38%, 1)",
    "$g-color-red--1": "hsla(0, 50%, 42%, 1)",
    "$g-color-red-0": "hsla(0, 58%, 49%, 1)",
    "$g-color-red-+1": "hsla(0, 85%, 67%, 1)",
    "$g-color-red-+2": "hsla(0, 82%, 76%, 1)",
    "$g-color-red-+3": "hsla(0, 88%, 90%, 1)",
    "$g-color-red-+4": "hsla(0, 85%, 92%, 1)",
    "$g-color-red-+5": "hsla(0, 92%, 95%, 1)",
    "$g-color-red-+6": "hsla(0, 100%, 96%, 1)",
    "$g-color-red-+7": "hsla(0, 88%, 98%, 1)",
    "$g-color-red-+8": "hsla(0, 100%, 99%, 1)",
    "$g-color-raspberry--4": "hsla(340, 70%, 16%, 1)",
    "$g-color-raspberry--3": "hsla(340, 55%, 26%, 1)",
    "$g-color-raspberry--2": "hsla(340, 54%, 37%, 1)",
    "$g-color-raspberry--1": "hsla(340, 50%, 41%, 1)",
    "$g-color-raspberry-0": "hsla(340, 60%, 47%, 1)",
    "$g-color-raspberry-+1": "hsla(340, 71%, 64%, 1)",
    "$g-color-raspberry-+2": "hsla(340, 71%, 74%, 1)",
    "$g-color-raspberry-+3": "hsla(340, 75%, 89%, 1)",
    "$g-color-raspberry-+4": "hsla(339, 83%, 91%, 1)",
    "$g-color-raspberry-+5": "hsla(342, 87%, 94%, 1)",
    "$g-color-raspberry-+6": "hsla(341, 80%, 96%, 1)",
    "$g-color-raspberry-+7": "hsla(340, 82%, 98%, 1)",
    "$g-color-raspberry-+8": "hsla(336, 100%, 99%, 1)",
    "$g-color-magenta--4": "hsla(320, 71%, 15%, 1)",
    "$g-color-magenta--3": "hsla(321, 55%, 26%, 1)",
    "$g-color-magenta--2": "hsla(320, 54%, 35%, 1)",
    "$g-color-magenta--1": "hsla(320, 50%, 39%, 1)",
    "$g-color-magenta-0": "hsla(320, 58%, 44%, 1)",
    "$g-color-magenta-+1": "hsla(320, 66%, 62%, 1)",
    "$g-color-magenta-+2": "hsla(320, 72%, 73%, 1)",
    "$g-color-magenta-+3": "hsla(320, 74%, 88%, 1)",
    "$g-color-magenta-+4": "hsla(321, 83%, 91%, 1)",
    "$g-color-magenta-+5": "hsla(321, 87%, 94%, 1)",
    "$g-color-magenta-+6": "hsla(319, 80%, 96%, 1)",
    "$g-color-magenta-+7": "hsla(320, 82%, 98%, 1)",
    "$g-color-magenta-+8": "hsla(324, 100%, 99%, 1)",
    "$g-color-purple--4": "hsla(320, 71%, 15%, 1)",
    "$g-color-purple--3": "hsla(290, 55%, 26%, 1)",
    "$g-color-purple--2": "hsla(290, 54%, 35%, 1)",
    "$g-color-purple--1": "hsla(290, 50%, 39%, 1)",
    "$g-color-purple-0": "hsla(290, 50%, 45%, 1)",
    "$g-color-purple-+1": "hsla(288, 62%, 63%, 1)",
    "$g-color-purple-+2": "hsla(288, 71%, 74%, 1)",
    "$g-color-purple-+3": "hsla(296, 74%, 88%, 1)",
    "$g-color-purple-+4": "hsla(291, 83%, 91%, 1)",
    "$g-color-purple-+5": "hsla(288, 87%, 94%, 1)",
    "$g-color-purple-+6": "hsla(289, 80%, 96%, 1)",
    "$g-color-purple-+7": "hsla(288, 100%, 98%, 1)",
    "$g-color-purple-+8": "hsla(288, 100%, 99%, 1)",
    "$g-color-grape--4": "hsla(270, 70%, 18%, 1)",
    "$g-color-grape--3": "hsla(270, 56%, 30%, 1)",
    "$g-color-grape--2": "hsla(270, 54%, 40%, 1)",
    "$g-color-grape--1": "hsla(270, 50%, 45%, 1)",
    "$g-color-grape-0": "hsla(270, 50%, 50%, 1)",
    "$g-color-grape-+1": "hsla(270, 74%, 68%, 1)",
    "$g-color-grape-+2": "hsla(270, 81%, 77%, 1)",
    "$g-color-grape-+3": "hsla(269, 84%, 90%, 1)",
    "$g-color-grape-+4": "hsla(270, 100%, 93%, 1)",
    "$g-color-grape-+5": "hsla(270, 100%, 95%, 1)",
    "$g-color-grape-+6": "hsla(264, 100%, 97%, 1)",
    "$g-color-grape-+7": "hsla(270, 100%, 98%, 1)",
    "$g-color-grape-+8": "hsla(264, 100%, 99%, 1)",
    "$g-color-violet--4": "hsla(250, 69%, 23%, 1)",
    "$g-color-violet--3": "hsla(250, 55%, 35%, 1)",
    "$g-color-violet--2": "hsla(250, 54%, 48%, 1)",
    "$g-color-violet--1": "hsla(250, 60%, 53%, 1)",
    "$g-color-violet-0": "hsla(250, 54%, 55%, 1)",
    "$g-color-violet-+1": "hsla(250, 80%, 72%, 1)",
    "$g-color-violet-+2": "hsla(246, 92%, 81%, 1)",
    "$g-color-violet-+3": "hsla(249, 100%, 92%, 1)",
    "$g-color-violet-+4": "hsla(246, 100%, 94%, 1)",
    "$g-color-violet-+5": "hsla(249, 100%, 96%, 1)",
    "$g-color-violet-+6": "hsla(252, 100%, 97%, 1)",
    "$g-color-violet-+7": "hsla(252, 100%, 98%, 1)",
    "$g-color-violet-+8": "hsla(252, 100%, 99%, 1)",
    "$g-color-blue--4": "hsla(222, 91%, 19%, 1)",
    "$g-color-blue--3": "hsla(222, 80%, 33%, 1)",
    "$g-color-blue--2": "hsla(222, 73%, 44%, 1)",
    "$g-color-blue--1": "hsla(222, 68%, 48%, 1)",
    "$g-color-blue-0": "hsla(222, 66%, 51%, 1)",
    "$g-color-blue-+1": "hsla(222, 87%, 68%, 1)",
    "$g-color-blue-+2": "hsla(221, 93%, 77%, 1)",
    "$g-color-blue-+3": "hsla(221, 100%, 90%, 1)",
    "$g-color-blue-+4": "hsla(221, 100%, 92%, 1)",
    "$g-color-blue-+5": "hsla(220, 100%, 95%, 1)",
    "$g-color-blue-+6": "hsla(223, 100%, 96%, 1)",
    "$g-color-blue-+7": "hsla(223, 100%, 98%, 1)",
    "$g-color-blue-+8": "hsla(227, 100%, 99%, 1)",
    "$g-color-cyan--4": "hsla(205, 100%, 13%, 1)",
    "$g-color-cyan--3": "hsla(205, 80%, 24%, 1)",
    "$g-color-cyan--2": "hsla(205, 73%, 32%, 1)",
    "$g-color-cyan--1": "hsla(205, 71%, 36%, 1)",
    "$g-color-cyan-0": "hsla(205, 92%, 38%, 1)",
    "$g-color-cyan-+1": "hsla(210, 66%, 60%, 1)",
    "$g-color-cyan-+2": "hsla(208, 87%, 72%, 1)",
    "$g-color-cyan-+3": "hsla(208, 100%, 88%, 1)",
    "$g-color-cyan-+4": "hsla(208, 100%, 90%, 1)",
    "$g-color-cyan-+5": "hsla(207, 100%, 94%, 1)",
    "$g-color-cyan-+6": "hsla(210, 100%, 96%, 1)",
    "$g-color-cyan-+7": "hsla(204, 100%, 97%, 1)",
    "$g-color-cyan-+8": "hsla(204, 100%, 99%, 1)",
    "$g-color-teal--4": "hsla(194, 96%, 11%, 1)",
    "$g-color-teal--3": "hsla(194, 80%, 20%, 1)",
    "$g-color-teal--2": "hsla(194, 65%, 28%, 1)",
    "$g-color-teal--1": "hsla(194, 68%, 31%, 1)",
    "$g-color-teal-0": "hsla(194, 91%, 31%, 1)",
    "$g-color-teal-+1": "hsla(196, 44%, 52%, 1)",
    "$g-color-teal-+2": "hsla(197, 58%, 67%, 1)",
    "$g-color-teal-+3": "hsla(193, 75%, 84%, 1)",
    "$g-color-teal-+4": "hsla(193, 76%, 87%, 1)",
    "$g-color-teal-+5": "hsla(196, 72%, 93%, 1)",
    "$g-color-teal-+6": "hsla(195, 77%, 95%, 1)",
    "$g-color-teal-+7": "hsla(196, 100%, 97%, 1)",
    "$g-color-teal-+8": "hsla(192, 100%, 99%, 1)",
    "$g-color-aquamarine--4": "hsla(170, 96%, 9%, 1)",
    "$g-color-aquamarine--3": "hsla(172, 70%, 17%, 1)",
    "$g-color-aquamarine--2": "hsla(172, 66%, 24%, 1)",
    "$g-color-aquamarine--1": "hsla(170, 62%, 27%, 1)",
    "$g-color-aquamarine-0": "hsla(170, 86%, 26%, 1)",
    "$g-color-aquamarine-+1": "hsla(172, 46%, 44%, 1)",
    "$g-color-aquamarine-+2": "hsla(173, 46%, 61%, 1)",
    "$g-color-aquamarine-+3": "hsla(173, 49%, 83%, 1)",
    "$g-color-aquamarine-+4": "hsla(172, 63%, 86%, 1)",
    "$g-color-aquamarine-+5": "hsla(174, 61%, 91%, 1)",
    "$g-color-aquamarine-+6": "hsla(172, 61%, 93%, 1)",
    "$g-color-aquamarine-+7": "hsla(174, 50%, 96%, 1)",
    "$g-color-aquamarine-+8": "hsla(180, 60%, 99%, 1)",
    "$g-color-green--4": "hsla(152, 76%, 10%, 1)",
    "$g-color-green--3": "hsla(152, 70%, 18%, 1)",
    "$g-color-green--2": "hsla(152, 61%, 25%, 1)",
    "$g-color-green--1": "hsla(152, 58%, 28%, 1)",
    "$g-color-green-0": "hsla(150, 62%, 30%, 1)",
    "$g-color-green-+1": "hsla(150, 38%, 47%, 1)",
    "$g-color-green-+2": "hsla(148, 46%, 63%, 1)",
    "$g-color-green-+3": "hsla(148, 51%, 84%, 1)",
    "$g-color-green-+4": "hsla(148, 61%, 86%, 1)",
    "$g-color-green-+5": "hsla(148, 70%, 91%, 1)",
    "$g-color-green-+6": "hsla(148, 61%, 94%, 1)",
    "$g-color-green-+7": "hsla(146, 47%, 97%, 1)",
    "$g-color-green-+8": "hsla(140, 60%, 99%, 1)",
    "$g-color-emerald--4": "hsla(122, 64%, 11%, 1)",
    "$g-color-emerald--3": "hsla(122, 63%, 20%, 1)",
    "$g-color-emerald--2": "hsla(122, 48%, 27%, 1)",
    "$g-color-emerald--1": "hsla(120, 41%, 31%, 1)",
    "$g-color-emerald-0": "hsla(120, 38%, 33%, 1)",
    "$g-color-emerald-+1": "hsla(120, 32%, 49%, 1)",
    "$g-color-emerald-+2": "hsla(120, 38%, 66%, 1)",
    "$g-color-emerald-+3": "hsla(120, 50%, 85%, 1)",
    "$g-color-emerald-+4": "hsla(120, 57%, 88%, 1)",
    "$g-color-emerald-+5": "hsla(120, 56%, 92%, 1)",
    "$g-color-emerald-+6": "hsla(120, 61%, 94%, 1)",
    "$g-color-emerald-+7": "hsla(120, 47%, 97%, 1)",
    "$g-color-emerald-+8": "hsla(120, 60%, 99%, 1)",
    "$g-color-orange--4": "hsla(30, 78%, 16%, 1)",
    "$g-color-orange--3": "hsla(30, 77%, 27%, 1)",
    "$g-color-orange--2": "hsla(29, 70%, 37%, 1)",
    "$g-color-orange--1": "hsla(30, 86%, 38%, 1)",
    "$g-color-orange-0": "hsla(30, 90%, 59%, 1)",
    "$g-color-orange-+1": "hsla(30, 90%, 64%, 1)",
    "$g-color-orange-+2": "hsla(30, 99%, 72%, 1)",
    "$g-color-orange-+3": "hsla(30, 100%, 83%, 1)",
    "$g-color-orange-+4": "hsla(30, 91%, 87%, 1)",
    "$g-color-orange-+5": "hsla(30, 100%, 91%, 1)",
    "$g-color-orange-+6": "hsla(31, 100%, 94%, 1)",
    "$g-color-orange-+7": "hsla(30, 100%, 96%, 1)",
    "$g-color-orange-+8": "hsla(24, 100%, 99%, 1)",
    "$g-color-transparent": "hsla(0, 0%, 100%, 0)",
    "$a-color-semantic-brand--4": th.color("$g-color-blue--4"),
    "$a-color-semantic-brand--3": th.color("$g-color-blue--3"),
    "$a-color-semantic-brand--2": th.color("$g-color-blue--2"),
    "$a-color-semantic-brand--1": th.color("$g-color-blue--1"),
    "$a-color-semantic-brand-0": th.color("$g-color-blue-0"),
    "$a-color-semantic-brand-+1": th.color("$g-color-blue-+1"),
    "$a-color-semantic-brand-+2": th.color("$g-color-blue-+2"),
    "$a-color-semantic-brand-+3": th.color("$g-color-blue-+3"),
    "$a-color-semantic-brand-+4": th.color("$g-color-blue-+4"),
    "$a-color-semantic-brand-+5": th.color("$g-color-blue-+5"),
    "$a-color-semantic-brand-+6": th.color("$g-color-blue-+6"),
    "$a-color-semantic-brand-+7": th.color("$g-color-blue-+7"),
    "$a-color-semantic-brand-+8": th.color("$g-color-blue-+8"),
    "$a-color-semantic-informative--4": th.color("$g-color-blue--4"),
    "$a-color-semantic-informative--3": th.color("$g-color-blue--3"),
    "$a-color-semantic-informative--2": th.color("$g-color-blue--2"),
    "$a-color-semantic-informative--1": th.color("$g-color-blue--1"),
    "$a-color-semantic-informative-0": th.color("$g-color-blue-0"),
    "$a-color-semantic-informative-+1": th.color("$g-color-blue-+1"),
    "$a-color-semantic-informative-+2": th.color("$g-color-blue-+2"),
    "$a-color-semantic-informative-+3": th.color("$g-color-blue-+3"),
    "$a-color-semantic-informative-+4": th.color("$g-color-blue-+4"),
    "$a-color-semantic-informative-+5": th.color("$g-color-blue-+5"),
    "$a-color-semantic-informative-+6": th.color("$g-color-blue-+6"),
    "$a-color-semantic-informative-+7": th.color("$g-color-blue-+7"),
    "$a-color-semantic-informative-+8": th.color("$g-color-blue-+8"),
    "$a-color-semantic-neutral--4": th.color("$g-color-coolGrey--4"),
    "$a-color-semantic-neutral--3": th.color("$g-color-coolGrey--3"),
    "$a-color-semantic-neutral--2": th.color("$g-color-coolGrey--2"),
    "$a-color-semantic-neutral--1": th.color("$g-color-coolGrey--1"),
    "$a-color-semantic-neutral-0": th.color("$g-color-coolGrey-0"),
    "$a-color-semantic-neutral-+1": th.color("$g-color-coolGrey-+1"),
    "$a-color-semantic-neutral-+2": th.color("$g-color-coolGrey-+2"),
    "$a-color-semantic-neutral-+3": th.color("$g-color-coolGrey-+3"),
    "$a-color-semantic-neutral-+4": th.color("$g-color-coolGrey-+4"),
    "$a-color-semantic-neutral-+5": th.color("$g-color-coolGrey-+5"),
    "$a-color-semantic-neutral-+6": th.color("$g-color-coolGrey-+6"),
    "$a-color-semantic-neutral-+7": th.color("$g-color-coolGrey-+7"),
    "$a-color-semantic-neutral-+8": th.color("$g-color-coolGrey-+8"),
    "$a-color-semantic-neutralA--4": th.color("$g-color-coolGreyA--4"),
    "$a-color-semantic-neutralA--3": th.color("$g-color-coolGreyA--3"),
    "$a-color-semantic-neutralA--2": th.color("$g-color-coolGreyA--2"),
    "$a-color-semantic-neutralA--1": th.color("$g-color-coolGreyA--1"),
    "$a-color-semantic-neutralA-0": th.color("$g-color-coolGreyA-0"),
    "$a-color-semantic-neutralA-+1": th.color("$g-color-coolGreyA-+1"),
    "$a-color-semantic-neutralA-+2": th.color("$g-color-coolGreyA-+2"),
    "$a-color-semantic-neutralA-+3": th.color("$g-color-coolGreyA-+3"),
    "$a-color-semantic-neutralA-+4": th.color("$g-color-coolGreyA-+4"),
    "$a-color-semantic-neutralA-+5": th.color("$g-color-coolGreyA-+5"),
    "$a-color-semantic-neutralA-+6": th.color("$g-color-coolGreyA-+6"),
    "$a-color-semantic-neutralA-+7": th.color("$g-color-coolGreyA-+7"),
    "$a-color-semantic-neutralA-+8": th.color("$g-color-coolGreyA-+8"),
    "$a-color-semantic-positive--4": th.color("$g-color-green--4"),
    "$a-color-semantic-positive--3": th.color("$g-color-green--3"),
    "$a-color-semantic-positive--2": th.color("$g-color-green--2"),
    "$a-color-semantic-positive--1": th.color("$g-color-green--1"),
    "$a-color-semantic-positive-0": th.color("$g-color-green-0"),
    "$a-color-semantic-positive-+1": th.color("$g-color-green-+1"),
    "$a-color-semantic-positive-+2": th.color("$g-color-green-+2"),
    "$a-color-semantic-positive-+3": th.color("$g-color-green-+3"),
    "$a-color-semantic-positive-+4": th.color("$g-color-green-+4"),
    "$a-color-semantic-positive-+5": th.color("$g-color-green-+5"),
    "$a-color-semantic-positive-+6": th.color("$g-color-green-+6"),
    "$a-color-semantic-positive-+7": th.color("$g-color-green-+7"),
    "$a-color-semantic-positive-+8": th.color("$g-color-green-+8"),
    "$a-color-semantic-warning--4": th.color("$g-color-orange--4"),
    "$a-color-semantic-warning--3": th.color("$g-color-orange--3"),
    "$a-color-semantic-warning--2": th.color("$g-color-orange--2"),
    "$a-color-semantic-warning--1": th.color("$g-color-orange--1"),
    "$a-color-semantic-warning-0": th.color("$g-color-orange-0"),
    "$a-color-semantic-warning-+1": th.color("$g-color-orange-+1"),
    "$a-color-semantic-warning-+2": th.color("$g-color-orange-+2"),
    "$a-color-semantic-warning-+3": th.color("$g-color-orange-+3"),
    "$a-color-semantic-warning-+4": th.color("$g-color-orange-+4"),
    "$a-color-semantic-warning-+5": th.color("$g-color-orange-+5"),
    "$a-color-semantic-warning-+6": th.color("$g-color-orange-+6"),
    "$a-color-semantic-warning-+7": th.color("$g-color-orange-+7"),
    "$a-color-semantic-warning-+8": th.color("$g-color-orange-+8"),
    "$a-color-semantic-negative--4": th.color("$g-color-red--4"),
    "$a-color-semantic-negative--3": th.color("$g-color-red--3"),
    "$a-color-semantic-negative--2": th.color("$g-color-red--2"),
    "$a-color-semantic-negative--1": th.color("$g-color-red--1"),
    "$a-color-semantic-negative-0": th.color("$g-color-red-0"),
    "$a-color-semantic-negative-+1": th.color("$g-color-red-+1"),
    "$a-color-semantic-negative-+2": th.color("$g-color-red-+2"),
    "$a-color-semantic-negative-+3": th.color("$g-color-red-+3"),
    "$a-color-semantic-negative-+4": th.color("$g-color-red-+4"),
    "$a-color-semantic-negative-+5": th.color("$g-color-red-+5"),
    "$a-color-semantic-negative-+6": th.color("$g-color-red-+6"),
    "$a-color-semantic-negative-+7": th.color("$g-color-red-+7"),
    "$a-color-semantic-negative-+8": th.color("$g-color-red-+8"),
    "$a-color-content-primary": th.color("$a-color-semantic-neutral--3"),
    "$a-color-content-secondary": th.color("$a-color-semantic-neutral-0"),
    "$a-color-content-tertiary": th.color("$a-color-semantic-neutral-+1"),
    "$a-color-content-disabled": th.color("$a-color-semantic-neutral-+2"),
    "$a-color-content-primary-inverted": th.color("$g-color-whiteA-0"),
    "$a-color-content-secondary-inverted": th.color("$g-color-whiteA--4"),
    "$a-color-content-tertiary-inverted": th.color("$g-color-whiteA--5"),
    "$a-color-content-disabled-inverted": th.color("$g-color-whiteA--6"),
    "$a-color-content-informative": th.color("$a-color-semantic-informative-0"),
    "$a-color-content-positive": th.color("$a-color-semantic-positive-0"),
    "$a-color-content-warning": th.color("$a-color-semantic-warning-0"),
    "$a-color-content-negative": th.color("$a-color-semantic-negative-0"),
    "$a-color-content-brand": th.color("$a-color-semantic-brand-0"),
    "$a-color-border-neutral": th.color("$a-color-semantic-neutral-0"),
    "$a-color-border-informative": th.color("$a-color-semantic-informative-0"),
    "$a-color-border-positive": th.color("$a-color-semantic-positive-0"),
    "$a-color-border-warning": th.color("$a-color-semantic-warning-0"),
    "$a-color-border-negative": th.color("$a-color-semantic-negative-0"),
    "$a-color-border-brand": th.color("$a-color-semantic-brand-0"),
    "$a-color-border-neutral-subtle": th.color("$a-color-semantic-neutral-+3"),
    "$a-color-border-informative-subtle": th.color(
      "$a-color-semantic-informative-+3"
    ),
    "$a-color-border-positive-subtle": th.color(
      "$a-color-semantic-positive-+3"
    ),
    "$a-color-border-warning-subtle": th.color("$a-color-semantic-warning-+3"),
    "$a-color-border-negative-subtle": th.color(
      "$a-color-semantic-negative-+3"
    ),
    "$a-color-border-brand-subtle": th.color("$a-color-semantic-brand-+3"),
    "$a-color-border-inverted": th.color("$g-color-whiteA-0"),
    "$a-color-border-default": th.color("$a-color-semantic-neutral-+5"),
    "$a-color-background-default": th.color("$g-color-whiteA-0"),
    "$a-color-background-inverted": th.color("$a-color-semantic-neutral--3"),
    "$a-color-background-neutral": th.color("$a-color-semantic-neutral-0"),
    "$a-color-background-informative": th.color(
      "$a-color-semantic-informative-0"
    ),
    "$a-color-background-positive": th.color("$a-color-semantic-positive-0"),
    "$a-color-background-warning": th.color("$a-color-semantic-warning-0"),
    "$a-color-background-negative": th.color("$a-color-semantic-negative-0"),
    "$a-color-background-brand": th.color("$a-color-semantic-brand-0"),
    "$a-color-background-neutral-subtle": th.color(
      "$a-color-semantic-neutral-+7"
    ),
    "$a-color-background-informative-subtle": th.color(
      "$a-color-semantic-informative-+7"
    ),
    "$a-color-background-positive-subtle": th.color(
      "$a-color-semantic-positive-+7"
    ),
    "$a-color-background-warning-subtle": th.color(
      "$a-color-semantic-warning-+7"
    ),
    "$a-color-background-negative-subtle": th.color(
      "$a-color-semantic-negative-+7"
    ),
    "$a-color-background-brand-subtle": th.color("$a-color-semantic-brand-+7"),
    "$a-color-background-neutral-surface": th.color(
      "$a-color-semantic-neutral-+8"
    ),
    "$a-color-background-informative-surface": th.color(
      "$a-color-semantic-informative-+8"
    ),
    "$a-color-background-positive-surface": th.color(
      "$a-color-semantic-positive-+8"
    ),
    "$a-color-background-warning-surface": th.color(
      "$a-color-semantic-warning-+8"
    ),
    "$a-color-background-negative-surface": th.color(
      "$a-color-semantic-negative-+8"
    ),
    "$a-color-background-brand-surface": th.color("$a-color-semantic-brand-+8"),
    "$a-color-background-dimmer": th.color("$a-color-semantic-neutralA-0"),
    "$a-color-action-primary-normal": th.color("$a-color-semantic-brand-0"),
    "$a-color-action-primary-hover": th.color("$a-color-semantic-brand--2"),
    "$a-color-action-primary-active": th.color("$a-color-semantic-brand--3"),
    "$a-color-action-primary-selected": th.color("$a-color-semantic-brand--2"),
    "$a-color-action-primary-subtle-normal": th.color(
      "$a-color-semantic-brand-+6"
    ),
    "$a-color-action-primary-subtle-hover": th.color(
      "$a-color-semantic-brand-+5"
    ),
    "$a-color-action-primary-subtle-active": th.color(
      "$a-color-semantic-brand-+3"
    ),
    "$a-color-action-primary-subtle-selected": th.color(
      "$a-color-semantic-brand-+5"
    ),
    "$a-color-action-neutral-normal": th.color("$a-color-semantic-neutral--1"),
    "$a-color-action-neutral-hover": th.color("$a-color-semantic-neutral--2"),
    "$a-color-action-neutral-active": th.color("$a-color-semantic-neutral--3"),
    "$a-color-action-neutral-selected": th.color(
      "$a-color-semantic-neutral--2"
    ),
    "$a-color-action-neutral-subtle-normal": th.color(
      "$a-color-semantic-neutral-+6"
    ),
    "$a-color-action-neutral-subtle-hover": th.color(
      "$a-color-semantic-neutral-+5"
    ),
    "$a-color-action-neutral-subtle-active": th.color(
      "$a-color-semantic-neutral-+3"
    ),
    "$a-color-action-neutral-subtle-selected": th.color(
      "$a-color-semantic-neutral-+5"
    ),
    "$a-color-action-success-normal": th.color("$a-color-semantic-positive-0"),
    "$a-color-action-success-hover": th.color("$a-color-semantic-positive--2"),
    "$a-color-action-success-active": th.color("$a-color-semantic-positive--3"),
    "$a-color-action-success-selected": th.color(
      "$a-color-semantic-positive--2"
    ),
    "$a-color-action-success-subtle-normal": th.color(
      "$a-color-semantic-positive-+6"
    ),
    "$a-color-action-success-subtle-hover": th.color(
      "$a-color-semantic-positive-+5"
    ),
    "$a-color-action-success-subtle-active": th.color(
      "$a-color-semantic-positive-+3"
    ),
    "$a-color-action-success-subtle-selected": th.color(
      "$a-color-semantic-positive-+5"
    ),
    "$a-color-action-destructive-normal": th.color(
      "$a-color-semantic-negative-0"
    ),
    "$a-color-action-destructive-hover": th.color(
      "$a-color-semantic-negative--2"
    ),
    "$a-color-action-destructive-active": th.color(
      "$a-color-semantic-negative--3"
    ),
    "$a-color-action-destructive-selected": th.color(
      "$a-color-semantic-negative--2"
    ),
    "$a-color-action-destructive-subtle-normal": th.color(
      "$a-color-semantic-negative-+6"
    ),
    "$a-color-action-destructive-subtle-hover": th.color(
      "$a-color-semantic-negative-+5"
    ),
    "$a-color-action-destructive-subtle-active": th.color(
      "$a-color-semantic-negative-+3"
    ),
    "$a-color-action-destructive-subtle-selected": th.color(
      "$a-color-semantic-negative-+5"
    ),
    "$a-color-action-ghost-normal": th.color("$g-color-transparent"),
    "$a-color-action-ghost-hover": th.color("$a-color-semantic-neutralA-+6"),
    "$a-color-action-ghost-active": th.color("$a-color-semantic-neutralA-+5"),
    "$a-color-action-ghost-selected": th.color("$a-color-semantic-neutralA-+6"),
    "$a-color-action-ghost-inverted-hover": th.color("$g-color-whiteA--8"),
    "$a-color-action-ghost-inverted-active": th.color("$g-color-whiteA--7"),
    "$a-color-action-ghost-inverted-selected": th.color("$g-color-whiteA--8"),
    "$a-color-action-ghost-destructive-hover": th.color(
      "$a-color-semantic-negative-+6"
    ),
    "$a-color-action-ghost-destructive-active": th.color(
      "$a-color-semantic-negative-+5"
    ),
    "$a-color-action-ghost-destructive-selected": th.color(
      "$a-color-semantic-negative-+6"
    ),
    "$a-color-action-outline-normal": th.color("$a-color-semantic-neutral-+3"),
    "$a-color-action-outline-hover": th.color("$a-color-semantic-neutral-+2"),
    "$a-color-action-outline-active": th.color("$a-color-semantic-neutral-+1"),
    "$a-color-action-outline-selected": th.color(
      "$a-color-semantic-neutral-+2"
    ),
    "$a-color-action-inverted-normal": th.color("$g-color-whiteA-0"),
    "$a-color-action-inverted-hover": th.color("$g-color-whiteA--1"),
    "$a-color-action-inverted-active": th.color("$g-color-whiteA--2"),
    "$a-color-action-inverted-selected": th.color("$g-color-whiteA--1"),
    "$a-color-action-reverseInverted-normal": th.color(
      "$a-color-semantic-neutralA--3"
    ),
    "$a-color-action-reverseInverted-hover": th.color(
      "$a-color-semantic-neutralA--1"
    ),
    "$a-color-action-reverseInverted-active": th.color(
      "$a-color-semantic-neutralA-0"
    ),
    "$a-color-action-reverseInverted-selected": th.color(
      "$a-color-semantic-neutralA--1"
    ),
    "$a-color-interaction-default-normal": th.color("$g-color-blue-0"),
    "$a-color-interaction-default-hover": th.color("$g-color-blue--2"),
    "$a-color-interaction-default-active": th.color("$g-color-blue--3"),
    "$a-color-interaction-default-selected": th.color("$g-color-blue--2"),
    "$a-color-interaction-default-subtle-normal": th.color("$g-color-blue-+6"),
    "$a-color-interaction-default-subtle-hover": th.color("$g-color-blue-+5"),
    "$a-color-interaction-default-subtle-active": th.color("$g-color-blue-+3"),
    "$a-color-interaction-default-subtle-selected":
      th.color("$g-color-blue-+5"),
    "$a-color-interaction-neutral-normal": th.color(
      "$a-color-semantic-neutral--1"
    ),
    "$a-color-interaction-neutral-hover": th.color(
      "$a-color-semantic-neutral--2"
    ),
    "$a-color-interaction-neutral-active": th.color(
      "$a-color-semantic-neutral--3"
    ),
    "$a-color-interaction-neutral-selected": th.color(
      "$a-color-semantic-neutral--2"
    ),
    "$a-color-interaction-neutral-subtle-normal": th.color(
      "$a-color-semantic-neutral-+6"
    ),
    "$a-color-interaction-neutral-subtle-hover": th.color(
      "$a-color-semantic-neutral-+5"
    ),
    "$a-color-interaction-neutral-subtle-active": th.color(
      "$a-color-semantic-neutral-+3"
    ),
    "$a-color-interaction-neutral-subtle-selected": th.color(
      "$a-color-semantic-neutral-+5"
    ),
    "$a-color-interaction-alert-normal": th.color(
      "$a-color-semantic-negative-0"
    ),
    "$a-color-interaction-alert-hover": th.color(
      "$a-color-semantic-negative--2"
    ),
    "$a-color-interaction-alert-active": th.color(
      "$a-color-semantic-negative--3"
    ),
    "$a-color-interaction-alert-selected": th.color(
      "$a-color-semantic-negative--2"
    ),
    "$a-color-interaction-alert-subtle-normal": th.color(
      "$a-color-semantic-negative-+6"
    ),
    "$a-color-interaction-alert-subtle-hover": th.color(
      "$a-color-semantic-negative-+5"
    ),
    "$a-color-interaction-alert-subtle-active": th.color(
      "$a-color-semantic-negative-+3"
    ),
    "$a-color-interaction-alert-subtle-selected": th.color(
      "$a-color-semantic-negative-+5"
    ),
    "$a-color-interaction-ghost-normal": th.color("$g-color-transparent"),
    "$a-color-interaction-ghost-hover": th.color(
      "$a-color-semantic-neutralA-+6"
    ),
    "$a-color-interaction-ghost-active": th.color(
      "$a-color-semantic-neutralA-+5"
    ),
    "$a-color-interaction-ghost-selected": th.color(
      "$a-color-semantic-neutralA-+6"
    ),
    "$a-color-interaction-ghost-inverted-hover": th.color("$g-color-whiteA--8"),
    "$a-color-interaction-ghost-inverted-normal":
      th.color("$g-color-whiteA--7"),
    "$a-color-interaction-ghost-inverted-selected":
      th.color("$g-color-whiteA--8"),
    "$a-color-interaction-ghost-destructive-hover": th.color(
      "$a-color-semantic-negative-+6"
    ),
    "$a-color-interaction-ghost-destructive-normal": th.color(
      "$a-color-semantic-negative-+5"
    ),
    "$a-color-interaction-ghost-destructive-selected": th.color(
      "$a-color-semantic-negative-+6"
    ),
    "$a-color-interaction-disabled-normal": th.color(
      "$a-color-semantic-neutral-+2"
    ),
    "$a-color-interaction-disabled-hover": th.color(
      "$a-color-semantic-neutral-+1"
    ),
    "$a-color-interaction-disabled-active": th.color(
      "$a-color-semantic-neutral-0"
    ),
    "$a-color-interaction-disabled-subtle-normal": th.color(
      "$a-color-semantic-neutral-+5"
    ),
    "$a-color-interaction-disabled-subtle-hover": th.color(
      "$a-color-semantic-neutral-+4"
    ),
    "$a-color-interaction-disabled-subtle-active": th.color(
      "$a-color-semantic-neutral-+3"
    ),
    "$a-color-interaction-border-normal": th.color("$g-color-blue-+2"),
    "$a-color-interaction-border-hover": th.color("$g-color-blue-+1"),
    "$a-color-interaction-border-active": th.color("$g-color-blue--1"),
    "$a-color-interaction-border-selected": th.color("$g-color-blue-0"),
    "$a-color-interaction-border-neutral-normal": th.color(
      "$a-color-semantic-neutral-+3"
    ),
    "$a-color-interaction-border-neutral-hover": th.color(
      "$a-color-semantic-neutral-+2"
    ),
    "$a-color-interaction-border-neutral-active": th.color(
      "$a-color-semantic-neutral-+1"
    ),
    "$a-color-interaction-border-neutral-selected": th.color(
      "$a-color-semantic-neutral-+2"
    ),
    "$a-color-interaction-border-alert": th.color(
      "$a-color-semantic-negative-+1"
    ),
    "$a-color-interaction-background-modal": th.color(
      "$a-color-background-default"
    ),
    "$a-color-interaction-background-modeless": th.color(
      "$a-color-background-default"
    ),
    "$a-color-interaction-background-modeless-inverted": th.color(
      "$a-color-background-inverted"
    ),
    "$a-color-interaction-background-sidepanel": th.color(
      "$a-color-background-default"
    ),
    "$a-color-interaction-background-formField": th.color(
      "$a-color-background-default"
    ),
    "$a-color-interaction-inverted-normal": th.color("$g-color-whiteA-0"),
    "$a-color-interaction-inverted-hover": th.color("$g-color-whiteA--1"),
    "$a-color-interaction-inverted-active": th.color("$g-color-whiteA--2"),
    "$a-color-interaction-inverted-selected": th.color("$g-color-whiteA--1"),
    "$a-color-interaction-focus-default": th.color("$g-color-blue-+1"),
    "$a-color-nonContextual-grey-onMuted": th.color(
      "$a-color-semantic-neutral--4"
    ),
    "$a-color-nonContextual-grey-default": th.color(
      "$a-color-semantic-neutral-0"
    ),
    "$a-color-nonContextual-grey-muted": th.color(
      "$a-color-semantic-neutral-+4"
    ),
    "$a-color-nonContextual-grey-subtle": th.color(
      "$a-color-semantic-neutral-+5"
    ),
    "$a-color-nonContextual-grey-surface": th.color(
      "$a-color-semantic-neutral-+8"
    ),
    "$a-color-nonContextual-red-onMuted": th.color("$g-color-red--4"),
    "$a-color-nonContextual-red-default": th.color("$g-color-red-0"),
    "$a-color-nonContextual-red-muted": th.color("$g-color-red-+4"),
    "$a-color-nonContextual-red-subtle": th.color("$g-color-red-+5"),
    "$a-color-nonContextual-red-surface": th.color("$g-color-red-+8"),
    "$a-color-nonContextual-raspberry-onMuted": th.color(
      "$g-color-raspberry--4"
    ),
    "$a-color-nonContextual-raspberry-default": th.color(
      "$g-color-raspberry-0"
    ),
    "$a-color-nonContextual-raspberry-muted": th.color("$g-color-raspberry-+4"),
    "$a-color-nonContextual-raspberry-subtle": th.color(
      "$g-color-raspberry-+5"
    ),
    "$a-color-nonContextual-raspberry-surface": th.color(
      "$g-color-raspberry-+8"
    ),
    "$a-color-nonContextual-magenta-onMuted": th.color("$g-color-magenta--4"),
    "$a-color-nonContextual-magenta-default": th.color("$g-color-magenta-0"),
    "$a-color-nonContextual-magenta-muted": th.color("$g-color-magenta-+4"),
    "$a-color-nonContextual-magenta-subtle": th.color("$g-color-magenta-+5"),
    "$a-color-nonContextual-magenta-surface": th.color("$g-color-magenta-+8"),
    "$a-color-nonContextual-purple-onMuted": th.color("$g-color-purple--4"),
    "$a-color-nonContextual-purple-default": th.color("$g-color-purple-0"),
    "$a-color-nonContextual-purple-muted": th.color("$g-color-purple-+4"),
    "$a-color-nonContextual-purple-subtle": th.color("$g-color-purple-+5"),
    "$a-color-nonContextual-purple-surface": th.color("$g-color-purple-+8"),
    "$a-color-nonContextual-grape-onMuted": th.color("$g-color-grape--4"),
    "$a-color-nonContextual-grape-default": th.color("$g-color-grape-0"),
    "$a-color-nonContextual-grape-muted": th.color("$g-color-grape-+4"),
    "$a-color-nonContextual-grape-subtle": th.color("$g-color-grape-+5"),
    "$a-color-nonContextual-grape-surface": th.color("$g-color-grape-+8"),
    "$a-color-nonContextual-violet-onMuted": th.color("$g-color-violet--4"),
    "$a-color-nonContextual-violet-default": th.color("$g-color-violet-0"),
    "$a-color-nonContextual-violet-muted": th.color("$g-color-violet-+4"),
    "$a-color-nonContextual-violet-subtle": th.color("$g-color-violet-+5"),
    "$a-color-nonContextual-violet-surface": th.color("$g-color-violet-+8"),
    "$a-color-nonContextual-blue-onMuted": th.color("$g-color-blue--4"),
    "$a-color-nonContextual-blue-default": th.color("$g-color-blue-0"),
    "$a-color-nonContextual-blue-muted": th.color("$g-color-blue-+4"),
    "$a-color-nonContextual-blue-subtle": th.color("$g-color-blue-+5"),
    "$a-color-nonContextual-blue-surface": th.color("$g-color-blue-+8"),
    "$a-color-nonContextual-cyan-onMuted": th.color("$g-color-cyan--4"),
    "$a-color-nonContextual-cyan-default": th.color("$g-color-cyan-0"),
    "$a-color-nonContextual-cyan-muted": th.color("$g-color-cyan-+4"),
    "$a-color-nonContextual-cyan-subtle": th.color("$g-color-cyan-+5"),
    "$a-color-nonContextual-cyan-surface": th.color("$g-color-cyan-+8"),
    "$a-color-nonContextual-teal-onMuted": th.color("$g-color-teal--4"),
    "$a-color-nonContextual-teal-default": th.color("$g-color-teal-0"),
    "$a-color-nonContextual-teal-muted": th.color("$g-color-teal-+4"),
    "$a-color-nonContextual-teal-subtle": th.color("$g-color-teal-+5"),
    "$a-color-nonContextual-teal-surface": th.color("$g-color-teal-+8"),
    "$a-color-nonContextual-aquamarine-onMuted": th.color(
      "$g-color-aquamarine--4"
    ),
    "$a-color-nonContextual-aquamarine-default": th.color(
      "$g-color-aquamarine-0"
    ),
    "$a-color-nonContextual-aquamarine-muted": th.color(
      "$g-color-aquamarine-+4"
    ),
    "$a-color-nonContextual-aquamarine-subtle": th.color(
      "$g-color-aquamarine-+5"
    ),
    "$a-color-nonContextual-aquamarine-surface": th.color(
      "$g-color-aquamarine-+8"
    ),
    "$a-color-nonContextual-green-onMuted": th.color("$g-color-green--4"),
    "$a-color-nonContextual-green-default": th.color("$g-color-green-0"),
    "$a-color-nonContextual-green-muted": th.color("$g-color-green-+4"),
    "$a-color-nonContextual-green-subtle": th.color("$g-color-green-+5"),
    "$a-color-nonContextual-green-surface": th.color("$g-color-green-+8"),
    "$a-color-nonContextual-emerald-onMuted": th.color("$g-color-emerald--4"),
    "$a-color-nonContextual-emerald-default": th.color("$g-color-emerald-0"),
    "$a-color-nonContextual-emerald-muted": th.color("$g-color-emerald-+4"),
    "$a-color-nonContextual-emerald-subtle": th.color("$g-color-emerald-+5"),
    "$a-color-nonContextual-emerald-surface": th.color("$g-color-emerald-+8"),
    "$a-color-border-defaultA": th.color("$a-color-semantic-neutralA-+5"),
    "$a-color-nonContextual-orange-onMuted": th.color("$g-color-orange--4"),
    "$a-color-nonContextual-orange-default": th.color("$g-color-orange-0"),
    "$a-color-nonContextual-orange-muted": th.color("$g-color-orange-+4"),
    "$a-color-nonContextual-orange-subtle": th.color("$g-color-orange-+5"),
    "$a-color-nonContextual-orange-surface": th.color("$g-color-orange-+8"),
  },
  radii: {
    "$g-border-radius-0": "0px",
    "$g-border-radius-100": "2px",
    "$g-border-radius-200": "4px",
    "$g-border-radius-300": "6px",
    "$g-border-radius-full": "50%",
    "$a-border-radius-small": th.radius("$g-border-radius-100"),
    "$a-border-radius-medium": th.radius("$g-border-radius-200"),
    "$a-border-radius-large": th.radius("$g-border-radius-300"),
  },
  borderWidths: {
    "$g-border-width-0": "0px",
    "$g-border-width-100": "1px",
    "$g-border-width-200": "2px",
    "$a-border-width-small": th.borderWidth("$g-border-width-100"),
    "$a-border-width-focus": th.borderWidth("$g-border-width-200"),
    "$a-border-width-medium": th.borderWidth("$g-border-width-200"),
  },
  borderStyles: {
    "$g-border-style-none": "none",
    "$g-border-style-solid": "solid",
    "$g-border-style-dashed": "dashed solid",
  },
  sizes: {
    "$g-size-0": "0px",
    "$g-size-25": "4px",
    "$g-size-50": "8px",
    "$g-size-100": "16px",
    "$g-size-150": "20px",
    "$g-size-200": "24px",
    "$g-size-250": "32px",
    "$g-size-300": "40px",
    "$g-size-350": "48px",
  },
  space: {
    "$g-space-0": "0px",
    "$g-space-25": "2px",
    "$g-space-50": "4px",
    "$g-space-75": "6px",
    "$g-space-100": "8px",
    "$g-space-150": "12px",
    "$g-space-200": "16px",
    "$g-space-300": "24px",
    "$g-space-400": "32px",
    "$g-space-500": "64px",
    "$g-space-125": "10px",
    "$g-space-175": "14px",
    "$a-space-component-gap-xSmall": th.space("$g-space-25"),
    "$a-space-component-gap-small": th.space("$g-space-50"),
    "$a-space-component-gap-medium": th.space("$g-space-75"),
    "$a-space-component-gap-large": th.space("$g-space-100"),
    "$a-space-component-gap-xLarge": th.space("$g-space-125"),
    "$a-space-component-gap-2xLarge": th.space("$g-space-200"),
    "$a-space-component-gap-3xLarge": th.space("$g-space-400"),
    "$a-space-component-padding-xSmall": th.space("$g-space-50"),
    "$a-space-component-padding-small": th.space("$g-space-75"),
    "$a-space-component-padding-medium": th.space("$g-space-100"),
    "$a-space-component-padding-large": th.space("$g-space-125"),
    "$a-space-component-padding-xLarge": th.space("$g-space-150"),
    "$a-space-component-padding-2xLarge": th.space("$g-space-175"),
    "$a-space-component-padding-3xLarge": th.space("$g-space-200"),
    "$a-space-component-padding-4xLarge": th.space("$g-space-300"),
  },
  fonts: { "$g-font-family-primary": "Inter" },
  fontSizes: {
    "$g-font-size-25": "10px",
    "$g-font-size-50": "12px",
    "$g-font-size-75": "14px",
    "$g-font-size-100": "16px",
    "$g-font-size-200": "18px",
    "$g-font-size-300": "24px",
    "$g-font-size-400": "32px",
    "$g-font-size-500": "40px",
    "$g-font-size-600": "48px",
  },
  fontWeights: {
    "$g-font-weight-400": "400",
    "$g-font-weight-450": "450",
    "$g-font-weight-600": "600",
  },
  letterSpacings: {
    "$g-font-letterSpacing-0": "0px",
    "$g-font-letterSpacing-100": "0.1px",
    "$g-font-letterSpacing-200": "0.2px",
  },
  lineHeights: {
    "$g-font-lineHeight-scale-100": "1",
    "$g-font-lineHeight-scale-150": "1.5",
    "$g-font-lineHeight-scale-166": "1.66",
    "$g-font-lineHeight-scale-200": "2",
    "$g-font-lineHeight-value-100": "16px",
    "$g-font-lineHeight-value-150": "20px",
    "$g-font-lineHeight-value-200": "24px",
    "$g-font-lineHeight-value-250": "28px",
    "$g-font-lineHeight-value-300": "32px",
    "$g-font-lineHeight-value-350": "36px",
    "$g-font-lineHeight-value-450": "44px",
    "$g-font-lineHeight-value-600": "56px",
    "$g-font-lineHeight-value-700": "64px",
  },
  texts: {
    "$g-typo-normal-25": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-25",
      lineHeight: "$g-font-lineHeight-value-100",
      fontWeight: "$g-font-weight-400",
      letterSpacing: "$g-font-letterSpacing-200",
    },
    "$g-typo-normal-50": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-50",
      lineHeight: "$g-font-lineHeight-value-150",
      fontWeight: "$g-font-weight-400",
      letterSpacing: "$g-font-letterSpacing-200",
    },
    "$g-typo-normal-75": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-75",
      lineHeight: "$g-font-lineHeight-value-200",
      fontWeight: "$g-font-weight-400",
      letterSpacing: "$g-font-letterSpacing-200",
    },
    "$g-typo-normal-100": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-100",
      lineHeight: "$g-font-lineHeight-value-250",
      fontWeight: "$g-font-weight-400",
      letterSpacing: "$g-font-letterSpacing-200",
    },
    "$g-typo-normal-200": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-200",
      lineHeight: "$g-font-lineHeight-value-300",
      fontWeight: "$g-font-weight-400",
      letterSpacing: "$g-font-letterSpacing-200",
    },
    "$g-typo-normal-300": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-300",
      lineHeight: "$g-font-lineHeight-value-350",
      fontWeight: "$g-font-weight-400",
      letterSpacing: "$g-font-letterSpacing-200",
    },
    "$g-typo-normal-400": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-400",
      lineHeight: "$g-font-lineHeight-value-450",
      fontWeight: "$g-font-weight-400",
      letterSpacing: "$g-font-letterSpacing-200",
    },
    "$g-typo-normal-500": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-500",
      lineHeight: "$g-font-lineHeight-value-600",
      fontWeight: "$g-font-weight-400",
      letterSpacing: "$g-font-letterSpacing-200",
    },
    "$g-typo-normal-600": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-600",
      lineHeight: "$g-font-lineHeight-value-700",
      fontWeight: "$g-font-weight-400",
      letterSpacing: "$g-font-letterSpacing-200",
    },
    "$g-typo-medium-25": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-25",
      lineHeight: "$g-font-lineHeight-value-100",
      fontWeight: "$g-font-weight-450",
      letterSpacing: "$g-font-letterSpacing-200",
    },
    "$g-typo-medium-50": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-50",
      lineHeight: "$g-font-lineHeight-value-150",
      fontWeight: "$g-font-weight-450",
      letterSpacing: "$g-font-letterSpacing-200",
    },
    "$g-typo-medium-75": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-75",
      lineHeight: "$g-font-lineHeight-value-200",
      fontWeight: "$g-font-weight-450",
      letterSpacing: "$g-font-letterSpacing-200",
    },
    "$g-typo-medium-100": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-100",
      lineHeight: "$g-font-lineHeight-value-250",
      fontWeight: "$g-font-weight-450",
      letterSpacing: "$g-font-letterSpacing-200",
    },
    "$g-typo-medium-200": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-200",
      lineHeight: "$g-font-lineHeight-value-300",
      fontWeight: "$g-font-weight-450",
      letterSpacing: "$g-font-letterSpacing-200",
    },
    "$g-typo-medium-300": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-300",
      lineHeight: "$g-font-lineHeight-value-350",
      fontWeight: "$g-font-weight-450",
      letterSpacing: "$g-font-letterSpacing-200",
    },
    "$g-typo-medium-400": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-400",
      lineHeight: "$g-font-lineHeight-value-450",
      fontWeight: "$g-font-weight-450",
      letterSpacing: "$g-font-letterSpacing-200",
    },
    "$g-typo-medium-500": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-500",
      lineHeight: "$g-font-lineHeight-value-600",
      fontWeight: "$g-font-weight-450",
      letterSpacing: "$g-font-letterSpacing-200",
    },
    "$g-typo-medium-600": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-600",
      lineHeight: "$g-font-lineHeight-value-700",
      fontWeight: "$g-font-weight-450",
      letterSpacing: "$g-font-letterSpacing-200",
    },
    "$g-typo-strong-25": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-25",
      lineHeight: "$g-font-lineHeight-value-100",
      fontWeight: "$g-font-weight-600",
      letterSpacing: "$g-font-letterSpacing-100",
    },
    "$g-typo-strong-50": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-50",
      lineHeight: "$g-font-lineHeight-value-150",
      fontWeight: "$g-font-weight-600",
      letterSpacing: "$g-font-letterSpacing-100",
    },
    "$g-typo-strong-75": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-75",
      lineHeight: "$g-font-lineHeight-value-200",
      fontWeight: "$g-font-weight-600",
      letterSpacing: "$g-font-letterSpacing-100",
    },
    "$g-typo-strong-100": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-100",
      lineHeight: "$g-font-lineHeight-value-250",
      fontWeight: "$g-font-weight-600",
      letterSpacing: "$g-font-letterSpacing-100",
    },
    "$g-typo-strong-200": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-200",
      lineHeight: "$g-font-lineHeight-value-300",
      fontWeight: "$g-font-weight-600",
      letterSpacing: "$g-font-letterSpacing-100",
    },
    "$g-typo-strong-300": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-300",
      lineHeight: "$g-font-lineHeight-value-350",
      fontWeight: "$g-font-weight-600",
      letterSpacing: "$g-font-letterSpacing-100",
    },
    "$g-typo-strong-400": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-400",
      lineHeight: "$g-font-lineHeight-value-450",
      fontWeight: "$g-font-weight-600",
      letterSpacing: "$g-font-letterSpacing-100",
    },
    "$g-typo-strong-500": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-500",
      lineHeight: "$g-font-lineHeight-value-600",
      fontWeight: "$g-font-weight-600",
      letterSpacing: "$g-font-letterSpacing-100",
    },
    "$g-typo-strong-600": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-600",
      lineHeight: "$g-font-lineHeight-value-700",
      fontWeight: "$g-font-weight-600",
      letterSpacing: "$g-font-letterSpacing-100",
    },
    "$a-typo-body-large": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-100",
      lineHeight: "$g-font-lineHeight-value-250",
      fontWeight: "$g-font-weight-450",
      letterSpacing: "$g-font-letterSpacing-200",
    },
    "$a-typo-body-medium": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-75",
      lineHeight: "$g-font-lineHeight-value-200",
      fontWeight: "$g-font-weight-450",
      letterSpacing: "$g-font-letterSpacing-200",
    },
    "$a-typo-body-small": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-50",
      lineHeight: "$g-font-lineHeight-value-150",
      fontWeight: "$g-font-weight-450",
      letterSpacing: "$g-font-letterSpacing-200",
    },
    "$a-typo-body-xSmall": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-25",
      lineHeight: "$g-font-lineHeight-value-100",
      fontWeight: "$g-font-weight-450",
      letterSpacing: "$g-font-letterSpacing-200",
    },
    "$a-typo-body-strong-large": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-100",
      lineHeight: "$g-font-lineHeight-value-250",
      fontWeight: "$g-font-weight-600",
      letterSpacing: "$g-font-letterSpacing-100",
    },
    "$a-typo-body-strong-medium": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-75",
      lineHeight: "$g-font-lineHeight-value-200",
      fontWeight: "$g-font-weight-600",
      letterSpacing: "$g-font-letterSpacing-100",
    },
    "$a-typo-body-strong-small": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-50",
      lineHeight: "$g-font-lineHeight-value-150",
      fontWeight: "$g-font-weight-600",
      letterSpacing: "$g-font-letterSpacing-100",
    },
    "$a-typo-body-strong-xSmall": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-25",
      lineHeight: "$g-font-lineHeight-value-100",
      fontWeight: "$g-font-weight-600",
      letterSpacing: "$g-font-letterSpacing-100",
    },
    "$a-typo-hero-large": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-500",
      lineHeight: "$g-font-lineHeight-value-600",
      fontWeight: "$g-font-weight-600",
      letterSpacing: "$g-font-letterSpacing-100",
    },
    "$a-typo-hero-medium": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-600",
      lineHeight: "$g-font-lineHeight-value-700",
      fontWeight: "$g-font-weight-600",
      letterSpacing: "$g-font-letterSpacing-100",
    },
    "$a-typo-header-4xLarge": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-400",
      lineHeight: "$g-font-lineHeight-value-450",
      fontWeight: "$g-font-weight-600",
      letterSpacing: "$g-font-letterSpacing-100",
    },
    "$a-typo-header-3xLarge": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-300",
      lineHeight: "$g-font-lineHeight-value-350",
      fontWeight: "$g-font-weight-600",
      letterSpacing: "$g-font-letterSpacing-100",
    },
    "$a-typo-header-xLarge": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-200",
      lineHeight: "$g-font-lineHeight-value-300",
      fontWeight: "$g-font-weight-600",
      letterSpacing: "$g-font-letterSpacing-100",
    },
    "$a-typo-header-large": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-100",
      lineHeight: "$g-font-lineHeight-value-250",
      fontWeight: "$g-font-weight-600",
      letterSpacing: "$g-font-letterSpacing-100",
    },
    "$a-typo-header-medium": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-75",
      lineHeight: "$g-font-lineHeight-value-200",
      fontWeight: "$g-font-weight-600",
      letterSpacing: "$g-font-letterSpacing-100",
    },
    "$a-typo-header-small": {
      fontFamily: "$g-font-family-primary",
      fontSize: "$g-font-size-50",
      lineHeight: "$g-font-lineHeight-value-150",
      fontWeight: "$g-font-weight-600",
      letterSpacing: "$g-font-letterSpacing-100",
    },
  },
  shadows: {
    "$g-elevation-bottom-100": "0px 1px 2px 0px rgba(27, 36, 44, 0.12)",
    "$g-elevation-bottom-200":
      "0px 2px 2px -1px rgba(27, 36, 44, 0.04), 0px 2px 8px -1px rgba(27, 36, 44, 0.08)",
    "$g-elevation-bottom-300":
      "0px 2px 2px -1px rgba(27, 36, 44, 0.04), 0px 8px 16px -2px rgba(27, 36, 44, 0.12)",
    "$g-elevation-bottom-400":
      "0px 2px 2px -1px rgba(27, 36, 44, 0.04), 0px 16px 24px -6px rgba(27, 36, 44, 0.16)",
    "$g-elevation-top-100": "0px -1px 2px 0px rgba(27, 36, 44, 0.12)",
    "$g-elevation-top-200":
      "0px -2px 2px -1px rgba(27, 36, 44, 0.04), 0px -2px 8px -1px rgba(27, 36, 44, 0.08)",
    "$g-elevation-top-300":
      "0px -2px 2px -1px rgba(27, 36, 44, 0.04), 0px -8px 16px -2px rgba(27, 36, 44, 0.12)",
    "$g-elevation-top-400":
      "0px -2px 2px -1px rgba(27, 36, 44, 0.04), 0px -16px 24px -6px rgba(27, 36, 44, 0.16)",
  },
  opacity: {
    "$g-opacity-0": "0",
    "$g-opacity-50": "0.5",
    "$g-opacity-100": "1",
    "$a-opacity-disabled": "0.5",
  },
};
